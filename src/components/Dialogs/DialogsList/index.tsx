import React, {useEffect, useState, memo} from "react"
import {useSelector, useDispatch} from "react-redux"
import {Empty, Spin} from "antd"
import _orderBy from "lodash/orderBy"

import {IDialog} from "types"
import {RootState} from "store/reducers"
import {fetchDialogsAction} from "store/actions/dialogs"

import {DialogsItem} from "components"

import "../Dialogs.scss"

interface DialogsListProps {
  searchValue: string
}

const DialogsList = ({searchValue}: DialogsListProps) => {
  const dispatch = useDispatch()
  const {dialogs, isLoading, user} = useSelector(
    ({dialogs, user}: RootState) => ({
      dialogs: dialogs.items,
      isLoading: dialogs.isLoading,
      user: user.data,
    })
  )

  const [filteredDialogs, setFilteredDialogs] = useState<Array<IDialog>>([])

  useEffect(() => {
    dispatch(fetchDialogsAction())
  }, [dispatch])

  useEffect(() => {
    setFilteredDialogs(dialogs)
    if (searchValue) {
      setFilteredDialogs(f =>
        f.filter(
          dialog =>
            dialog.partner.fullName
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) >= 0 ||
            dialog.author.fullName
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) >= 0
        )
      )
    }
  }, [searchValue, dialogs])

  return (
    <div className="dialogs">
      {isLoading ? (
        <div className="dialogs--loading">
          <Spin tip="Loading..." />
        </div>
      ) : filteredDialogs.length ? (
        _orderBy(filteredDialogs, d => new Date(d.lastMessage.createdAt!), [
          "desc",
        ]).map(d => (
          <DialogsItem
            key={d._id}
            dialog={d}
            isMe={user?._id === `${d.lastMessage.user}`}
            partner={user?._id === d.author._id ? d.partner : d.author}
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
