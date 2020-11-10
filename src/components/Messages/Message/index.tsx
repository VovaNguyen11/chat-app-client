import React from "react"
import classNames from "classnames"

import {Avatar, Date, IconCkecked} from "components"

import {IUser} from "types/user"

import "./Message.scss"

interface IImgAttachment {
  fileName: string
  url: string
}

interface MessageProps {
  user: IUser
  text?: string
  date?: Date
  isMe?: boolean
  isChecked?: boolean
  isTyping?: boolean
  attachments?: Array<IImgAttachment>
}

const Message = ({
  user,
  text,
  date,
  isMe,
  isChecked,
  isTyping,
  attachments,
}: MessageProps) => {
  return (
    <div
      className={classNames(
        "message",
        {"message--is-me": isMe},
        {"message--is-typing": isTyping},
        {"message--image": attachments?.length === 1}
      )}
    >
      <div className="message__avatar">
        <Avatar user={user} />
      </div>
      <div className="message__content">
        {(text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        )}
        {attachments && (
          <div className="message__attachments">
            {attachments.map((item, index) => (
              <img
                src={item.url}
                alt={item.fileName}
                key={item.fileName + index}
              />
            ))}
          </div>
        )}
        {date && (
          <div className="message__date">
            <Date date={date} />
          </div>
        )}
      </div>
      {isMe && (
        <div className="message__status">
          <IconCkecked isChecked={isChecked} />
        </div>
      )}
    </div>
  )
}

export default Message
