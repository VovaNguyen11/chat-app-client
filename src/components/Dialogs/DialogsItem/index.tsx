import React from "react"
import classNames from "classnames"

import {Avatar, IconCkecked} from "components"

import {getMessageTime} from "utils/helpers"

import {IDialog} from "types"

import "../Dialogs.scss"



const DialogItem = ({partner, isMe, isChecked, message}: IDialog) => {
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
          <span>{getMessageTime(new Date(message.createdAt))}</span>
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
