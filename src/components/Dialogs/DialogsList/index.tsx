import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {Empty, Spin} from "antd"
import _orderBy from "lodash/orderBy"

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
  const {dialogs, isLoading} = useSelector(({dialogs}: RootState) => ({
    dialogs: dialogs.items,
    isLoading: dialogs.isLoading,
  }))

  const [filteredDialogs] = useState<Array<IDialog>>(dialogs)

  useEffect(() => {
    dispatch(fetchDialogsAction())
  }, [dispatch])

  useEffect(() => {
    if (searchValue) {
      filteredDialogs.filter(
        dialog =>
          dialog.message.partner.fullName
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) >= 0
      )
    }
  }, [searchValue, filteredDialogs])

  return (
    <div className="dialogs">
      {isLoading ? (
        <div className="dialogs--loading">
          <Spin tip="Loading..." />
        </div>
      ) : filteredDialogs.length ? (
        _orderBy(filteredDialogs, d => new Date(d.message.createdAt), [
          "desc",
        ]).map(d => (
          <DialogsItem
            key={d._id}
            dialog={d}
            setCurrentDialogAction={setCurrentDialogAction}
          />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No results" />
      )}
    </div>
  )
}

export default DialogsList
