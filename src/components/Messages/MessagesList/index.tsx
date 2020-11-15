import React, {memo} from "react"
import {Empty, Spin} from "antd"
import classNames from "classnames"

import {Message} from "components"

import {IMessage} from "types"

import "./MessagesList.scss"

interface MessagesListProps {
  messages: IMessage[]
  isLoading: boolean
  messagesRef: React.RefObject<HTMLDivElement>
  currentDialogId: string
}

const MessagesList = ({
  messages,
  isLoading,
  messagesRef,
  currentDialogId,
}: MessagesListProps) => {
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

export default memo(MessagesList)
