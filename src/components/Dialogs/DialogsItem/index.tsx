import React from "react"
import classNames from "classnames"

import {Avatar, IconCkecked} from "components"

import getMessageTime from "utils/getMessageTime"

import {IUser} from "types/user"
import {IMessage} from "types/message"

import "../Dialogs.scss"

interface DialogItemProps {
  partner: IUser
  isChecked: boolean
  isMe: boolean
  message: IMessage
}

const DialogItem = ({partner, isMe, isChecked, message}: DialogItemProps) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": partner.isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={partner} />
      </div>
      <div className="dialogs__item-content">
        <div className="dialogs__item-content-top">
          <h3>{partner.fullName}</h3>
          <span>{getMessageTime(message.createdAt)}</span>
        </div>
        <div className="dialogs__item-content-bottom">
          <p>{message.text}</p>
          {isMe ? (
            <IconCkecked isChecked={isChecked} />
          ) : (
            <div className="dialogs__item-count">3</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DialogItem
