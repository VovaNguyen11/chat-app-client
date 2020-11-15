import React, {memo} from "react"
import classNames from "classnames"
import {Link} from "react-router-dom"
import {Avatar, IconCkecked} from "components"

import {getMessageTime} from "utils/helpers"

import {IDialog} from "types"

import "../Dialogs.scss"

interface DialogItemProps {
  setCurrentDialogAction: (id: string) => void
  dialog: IDialog
}

const DialogItem = ({dialog, setCurrentDialogAction}: DialogItemProps) => {
  const {isMe, isChecked, message, _id} = dialog
  return (
    <Link
      to={`/dialogs/${_id}`}
      className={classNames("dialogs__item", {
        "dialogs__item--online": message.partner.isOnline,
      })}
      onClick={() => setCurrentDialogAction(_id)}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={message.partner} />
      </div>
      <div className="dialogs__item-content">
        <div className="dialogs__item-content-top">
          <h3>{message.partner.fullName}</h3>
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
    </Link>
  )
}

export default memo(DialogItem)
