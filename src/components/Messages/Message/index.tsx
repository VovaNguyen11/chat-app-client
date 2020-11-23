import React from "react"
import classNames from "classnames"
import reactStringReplace from "react-string-replace"
import {Emoji} from "emoji-mart"

import {Avatar, Time, IconCkecked, MessageAudio} from "components"

import {isAudio} from "utils/helpers"

import {IAttachment, IMessage} from "types"

import "./Message.scss"

const renderAttachment = (item: IAttachment) => {
  if (item.ext !== "webm") {
    return (
      <div key={item._id} className="message__attachments-item">
        <img src={item.url} alt={item.fileName} />
      </div>
    )
  } else {
    return <MessageAudio key={item._id} audioSrc={item.url} />
  }
}

const Message = ({
  user,
  text,
  createdAt,
  isMe,
  isChecked,
  isTyping,
  attachments,
}: IMessage) => {
  return (
    <div
      className={classNames(
        "message",
        {"message--is-me": isMe},
        {"message--is-typing": isTyping},
        {
          "message--image":
            attachments &&
            !isAudio(attachments) &&
            attachments.length === 1 &&
            !text,
        },
        {"message--audio": attachments && isAudio(attachments)}
      )}
    >
      <div className="message__avatar">
        <Avatar user={user} />
      </div>
      <div className="message__content">
        {(text || isTyping) && (
          <div className="message__bubble">
            {text && (
              <p className="message__text">
                {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                  <Emoji key={i} emoji={match} set="apple" size={16} />
                ))}
              </p>
            )}
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
            {attachments.map(item => renderAttachment(item))}
          </div>
        )}
        {createdAt && (
          <div className="message__date">
            <Time date={createdAt} />
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
