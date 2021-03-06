import React, {useEffect, useRef, useCallback, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import classNames from "classnames"
import socket from "services/socket.io"

import {RootState} from "store/reducers"
import {IMessage} from "types"
import {
  fetchMessagesAction,
  addMessageAction,
  removeMessageAction,
  updateCheckedAction,
} from "store/actions/messages"

import {Spin, Empty, Modal} from "antd"
import {Message, MessageTyping} from "components"

import "./MessagesList.scss"

const MessagesList = () => {
  const dispatch = useDispatch()
  const {messages, currentDialogId, isLoading, user} = useSelector(
    ({messages, dialogs, user}: RootState) => ({
      user: user.data,
      messages: messages.items,
      isLoading: messages.isLoading,
      currentDialogId: dialogs.currentDialogId,
    })
  )

  const [previewImage, setPreviewImage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const typingTimeoutRef = useRef() as React.MutableRefObject<NodeJS.Timeout>

  const onAddNewMessage = useCallback(
    (message: IMessage) => {
      if (currentDialogId === message.dialog) {
        dispatch(addMessageAction(message))
        setIsTyping(false)
      }
    },
    [currentDialogId, dispatch]
  )

  const onRemoveMessage = useCallback(
    (message: IMessage) => {
      if (currentDialogId === message.dialog) {
        dispatch(removeMessageAction(message._id))
      }
    },
    [currentDialogId, dispatch]
  )

  const onMessagesChecked = useCallback(
    (dialogId: string, userId: string) => {
      if (currentDialogId === dialogId) {
        dispatch(updateCheckedAction(dialogId, userId))
      }
    },
    [currentDialogId, dispatch]
  )

  const handleTyping = useCallback(
    (dialogId: string) => {
      if (dialogId === currentDialogId) {
        setIsTyping(true)
        clearTimeout(typingTimeoutRef.current)
        typingTimeoutRef.current = setTimeout(() => {
          setIsTyping(false)
        }, 3000)
      }
    },
    [currentDialogId]
  )

  useEffect(() => {
    if (currentDialogId) {
      dispatch(fetchMessagesAction(currentDialogId))
    }
  }, [currentDialogId, dispatch])

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
  }, [messages, isTyping])

  useEffect(() => {
    socket.on("NEW_MESSAGE", onAddNewMessage)
    socket.on("REMOVE_MESSAGE", onRemoveMessage)
    socket.on("MESSAGES_CHECKED", onMessagesChecked)
    return () => {
      socket.removeListener("NEW_MESSAGE", onAddNewMessage)
      socket.removeListener("REMOVE_MESSAGE", onRemoveMessage)
      socket.removeListener("MESSAGES_CHECKED", onMessagesChecked)
    }
  }, [onAddNewMessage, onRemoveMessage, onMessagesChecked])

  useEffect(() => {
    socket.on("DIALOGS:TYPING", handleTyping)
    return () => {
      socket.removeListener("DIALOGS:TYPING", handleTyping)
      setIsTyping(false)
    }
  }, [handleTyping])

  return (
    <div
      className={classNames("messages__list", {
        "messages__list--empty": !messages.length,
      })}
      ref={messagesRef}
    >
      {isLoading ? (
        <div className="messages__list--loading">
          <Spin tip="Loading..." size="large" />
        </div>
      ) : messages.length > 0 ? (
        messages.map(m => (
          <Message
            {...m}
            isMe={user?._id === m.user._id}
            key={m._id}
            setPreviewImage={setPreviewImage}
          />
        ))
      ) : (
        <Empty description="Dialog is empty" image={null} />
      )}
      {isTyping && <MessageTyping />}
      <Modal
        visible={!!previewImage}
        footer={null}
        onCancel={() => setPreviewImage("")}
      >
        <img alt="Preview" style={{width: "100%"}} src={previewImage} />
      </Modal>
    </div>
  )
}

export default MessagesList
