import React, {memo} from "react"
import _orderBy from "lodash/orderBy"
import {Input, Empty} from "antd"

import DialogsItem from "../DialogsItem"

import "../Dialogs.scss"

interface DialogListProps {
  dialogs?: any
  handleSearch: (e: any) => any
}

const DialogList = ({dialogs, handleSearch}: DialogListProps) => {
  const onInputChange = (e: any) => {
    handleSearch(e.target.value)
  }

  return (
    <div className="dialogs">
      <div className="sidebar__search-input">
        <Input.Search placeholder="Search by users" onChange={onInputChange} />
      </div>
      {dialogs.length ? (
        _orderBy(dialogs, d => new Date(d.message.createdAt), [
          "desc",
        ]).map((d: any) => <DialogsItem key={d._id} {...d} />)
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No results " />
      )}
    </div>
  )
}

export default memo(DialogList)
