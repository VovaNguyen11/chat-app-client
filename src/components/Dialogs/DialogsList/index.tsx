import React, {useEffect, useState, memo, useCallback} from "react"
import {useSelector, useDispatch} from "react-redux"
import {Empty} from "antd"
import _orderBy from "lodash/orderBy"
import socket from "services/socket.io"

import {IDialog} from "types"
import {RootState} from "store/reducers"
import {
  fetchDialogsAction,
  setCurrentDialogAction,
  updateDialogItemAction,
  addDialogAction,
} from "store/actions/dialogs"

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

  const handleAddDialog = useCallback(
    (dialog: IDialog) => {
      dispatch(addDialogAction(dialog))

      if (user && dialog.author._id === user._id) {
        dispatch(setCurrentDialogAction(dialog._id))
      }
    },
    [dispatch, user]
  )

  const handleUpdateDialog = useCallback(
    (dialog: IDialog) => {
      dispatch(updateDialogItemAction(dialog))
    },
    [dispatch]
  )

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
    dispatch(fetchDialogsAction())

    socket.on("NEW_DIALOG", handleAddDialog)
    socket.on("DIALOGS: MESSAGE_REMOVED", handleUpdateDialog)
    socket.on("DIALOGS: NEW_MESSAGE", handleUpdateDialog)
    // socket.on("MESSAGES_CHECKED")

    return () => {
      socket.removeListener("NыEW_DIALOG", handleAddDialog)
      socket.removeListener("DIALOGS: MESSAGE_REMOVED", handleUpdateDialog)
      socket.removeListener("DIALOGS: NEW_MESSAGE", handleUpdateDialog)
    }
  }, [handleAddDialog, handleUpdateDialog, dispatch])

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
