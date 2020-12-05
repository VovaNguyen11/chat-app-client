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
} from "store/actions/messages"

import {Spin, Empty, Modal} from "antd"
import {Message} from "components"

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

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const onAddNewMessage = useCallback(
    (message: IMessage) => {
      if (currentDialogId === message.dialog) {
        dispatch(addMessageAction(message))
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

  useEffect(() => {
    if (currentDialogId) {
      dispatch(fetchMessagesAction(currentDialogId))
    }
  }, [currentDialogId, dispatch])

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
  }, [messages])

  useEffect(() => {
    socket.on("NEW_MESSAGE", onAddNewMessage)
    socket.on("REMOVE_MESSAGE", onRemoveMessage)
    return () => {
      socket.removeListener("NEW_MESSAGE", onAddNewMessage)
      socket.removeListener("REMOVE_MESSAGE", onRemoveMessage)
    }
  }, [onAddNewMessage, onRemoveMessage])

  return (
    <div
      className={classNames("messages__list", {
        "messages__list--empty": !messages.length,
      })}
      ref={messagesRef}
    >
      {isLoading ? (
        <Spin tip="Loading..." size="large" />
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
