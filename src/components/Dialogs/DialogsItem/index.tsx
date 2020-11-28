import React, {memo} from "react"
import classNames from "classnames"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"

import {Avatar, IconCkecked} from "components"

import {getMessageTime} from "utils/helpers"

import {IDialog, IUser} from "types"
import {setCurrentDialogAction} from "store/actions/dialogs"

import "../Dialogs.scss"

interface DialogItemProps {
  dialog: IDialog
  isMe: boolean
  partner: IUser
  currentDialogId: string
}

const DialogItem = ({
  dialog,
  isMe,
  partner,
  currentDialogId,
}: DialogItemProps) => {
  const {lastMessage, _id, createdAt} = dialog
  const dispatch = useDispatch()

  return (
    <Link
      to={`/dialogs/${_id}`}
      className={classNames("dialogs__item", {
        "dialogs__item--online": partner.isOnline,
        "dialogs__item--active": currentDialogId === _id,
      })}
      onClick={() => dispatch(setCurrentDialogAction(_id))}
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
        <div className="dialogs__item-content-bottom">
          {lastMessage && (
            <>
              <p>{lastMessage.text}</p>
              {isMe ? (
                <IconCkecked isChecked={lastMessage.isChecked} />
              ) : (
                <div className="dialogs__item-count">3</div>
              )}
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

export default memo(DialogItem)
