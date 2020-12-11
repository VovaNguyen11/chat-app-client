import React, {memo} from "react"
import classNames from "classnames"
import {Link} from "react-router-dom"
import {getMessageTime, isAudio} from "utils/helpers"

import {Avatar, IconCkecked} from "components"

import {IDialog, IUser, IMessage} from "types"

import "../Dialogs.scss"

interface DialogItemProps {
  dialog: IDialog
  isMe: boolean
  partner: IUser
  currentDialogId: string
}

const renderLastMessageText = (message: IMessage, isMe: boolean) => {
  let text = ""
  if (message.attachments?.length) {
    if (isAudio(message.attachments)) {
      text = "Audio message"
    } else {
      text = `${message.attachments.length} photos`
    }
  } else {
    text = message.text || ""
  }

  return isMe ? `You: ${text}` : text
}

const DialogItem = ({
  dialog,
  isMe,
  partner,
  currentDialogId,
}: DialogItemProps) => {
  const {lastMessage, _id, createdAt} = dialog

  return (
    <Link
      to={`/dialogs/${_id}`}
      className={classNames("dialogs__item", {
        "dialogs__item--online": partner.isOnline,
        "dialogs__item--active": currentDialogId === _id,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={partner} />
      </div>
      <div className="dialogs__item-content">
        <div className="dialogs__item-content-top">
          <h3>{partner.fullName}</h3>
          <span>
            {lastMessage
              ? getMessageTime(new Date(lastMessage.createdAt!))
              : getMessageTime(new Date(createdAt))}
          </span>
        </div>
        {lastMessage && (
          <div className="dialogs__item-content-bottom">
            <p>{renderLastMessageText(lastMessage, isMe)}</p>
            {isMe && <IconCkecked isChecked={lastMessage.isChecked} />}
            {!isMe && !lastMessage.isChecked && (
              <div className="dialogs__item-count" />
            )}
          </div>
        )}
      </div>
    </Link>
  )
}

export default memo(DialogItem)
