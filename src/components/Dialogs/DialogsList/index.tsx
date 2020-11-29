import React, {useEffect, useState, memo} from "react"
import {useSelector, useDispatch} from "react-redux"
import {Empty} from "antd"
import _orderBy from "lodash/orderBy"
import socket from "services/socket.io"

import {IDialog} from "types"
import {RootState} from "store/reducers"
import {fetchDialogsAction, setCurrentDialogAction} from "store/actions/dialogs"

import {DialogsItem} from "components"

import "../Dialogs.scss"

interface DialogsListProps {
  searchValue: string
}

const DialogsList = ({searchValue}: DialogsListProps) => {
  const dispatch = useDispatch()
  const {dialogs, user, currentDialogId} = useSelector(
    ({dialogs, user}: RootState) => ({
      currentDialogId: dialogs.currentDialogId,
      dialogs: dialogs.items,
      user: user.data,
    })
  )

  const [filteredDialogs, setFilteredDialogs] = useState<Array<IDialog>>([])

  useEffect(() => {
    dispatch(fetchDialogsAction())
  }, [dispatch])

  useEffect(() => {
    if (searchValue && dialogs.length) {
      setFilteredDialogs(
        dialogs.filter(dialog =>
          user?._id === dialog.author._id
            ? dialog.partner.fullName
                .toLowerCase()
                .indexOf(searchValue.toLowerCase()) >= 0
            : dialog.author.fullName
                .toLowerCase()
                .indexOf(searchValue.toLowerCase()) >= 0
        )
      )
    } else {
      setFilteredDialogs(dialogs)
    }
  }, [searchValue, dialogs, user])

  useEffect(() => {
    socket.on("NEW_DIALOG", (dialog: IDialog) => {
      dispatch(fetchDialogsAction())
      if (user && dialog.author._id === user._id) {
        console.log(user)
        dispatch(setCurrentDialogAction(dialog._id))
      }
    })
    socket.on("UPDATE_LAST_MESSAGE", () => dispatch(fetchDialogsAction()))
    socket.on("NEW_MESSAGE", () => dispatch(fetchDialogsAction()))
  }, [dispatch, user])

  return (
    <div className="dialogs">
      {filteredDialogs.length ? (
        _orderBy(
          filteredDialogs,
          d =>
            d.lastMessage
              ? new Date(d.lastMessage.createdAt!)
              : new Date(d.createdAt),
          ["desc"]
        ).map(d => (
          <DialogsItem
            key={d._id}
            dialog={d}
            isMe={user?._id === `${d.lastMessage?.user}`}
            partner={user?._id === d.author._id ? d.partner : d.author}
            currentDialogId={currentDialogId}
          />
        ))
      ) : (
        <div className="dialogs--empty">
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No results"
          />
        </div>
      )}
    </div>
  )
}

export default memo(DialogsList)
