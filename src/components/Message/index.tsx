import React from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import classNames from "classnames"

import uncheckedIcon from "assets/img/icon-message-unread.svg"
import checkedIcon from "assets/img/icon-message-read.svg"

import "./Message.scss"

interface MessageProps {
  text: string
  avatarUrl: string
  date: Date
  user?: {
    fullName: string
  }
  isMe?: boolean
  isRead?: boolean
}

const Message = ({user, text, avatarUrl, date, isMe, isRead}: MessageProps) => {
  return (
    <div className={classNames("message", {"message--isme": isMe})}>
      <div className="message__avatar">
        <img src={avatarUrl} alt={`${user?.fullName} avatar`} />
      </div>
      <div className="message__content">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__date">
          {formatDistanceToNow(date, {addSuffix: true})}
        </span>
      </div>
      {isMe && (
        <div className="message__status">
          <img src={isRead ? checkedIcon : uncheckedIcon} alt="Checked icon" />
        </div>
      )}
    </div>
  )
}

export default Message
