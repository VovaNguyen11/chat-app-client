import React, {memo} from "react"
import _orderBy from "lodash/orderBy"
import {Empty, Spin} from "antd"

import DialogsItem from "../DialogsItem"

import {IDialog} from "types"

import "../Dialogs.scss"

interface DialogListProps {
  dialogs: IDialog[]
  isLoading: boolean
  setCurrentDialogAction: (id: string) => void
}

const DialogList = ({
  dialogs,
  isLoading,
  setCurrentDialogAction,
}: DialogListProps) => {
  return (
    <div className="dialogs">
      {isLoading ? (
        <div className="dialogs--loading">
          <Spin tip="Loading..." />
        </div>
      ) : dialogs.length ? (
        _orderBy(dialogs, d => new Date(d.message.createdAt), [
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

export default memo(DialogList)
