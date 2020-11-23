import React, {useEffect, useRef} from "react"
import {useSelector, useDispatch} from "react-redux"
import {Spin, Empty} from "antd"
import classNames from "classnames"

import {RootState} from "store/reducers"

import {fetchMessagesAction} from "store/actions/messages"

import {Message} from "components"

import "./MessagesList.scss"

const MessagesList = () => {
  const dispatch = useDispatch()
  const {messages, currentDialogId, isLoading} = useSelector(
    ({messages, dialogs}: RootState) => ({
      messages: messages.items,
      isLoading: messages.isLoading,
      currentDialogId: dialogs.currentDialogId,
    })
  )

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (currentDialogId) {
      dispatch(fetchMessagesAction(currentDialogId))
    }
  }, [currentDialogId, dispatch])

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
  }, [messages])

  return (
    <div
      className={classNames("messages__list", {
        "messages__list--empty": !messages.length,
      })}
      ref={messagesRef}
    >
      {isLoading ? (
        <Spin tip="Loading..." size="large" />
      ) : messages && currentDialogId ? (
        messages.length > 0 ? (
          messages.map((message, index) => <Message {...message} key={index} />)
        ) : (
          <Empty description="Dialog is empty" image={null} />
        )
      ) : (
        <Empty description="Select a dialog to start messaging" />
      )}
    </div>
  )
}

export default MessagesList
