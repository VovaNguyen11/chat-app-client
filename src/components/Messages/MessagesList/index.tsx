import React from "react"

import {Message} from "components"
import {IMessage} from "types"
import "./MessagesList.scss"

interface MessagesListProps {
  messages: Array<IMessage>
}

const MessagesList = ({messages}: MessagesListProps) => {
  return (
    <div className="messages__list">
      {messages.map(message => (
        <Message {...message} />
      ))}
    </div>
  )
}

export default MessagesList
