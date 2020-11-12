import React from "react"
import _orderBy from "lodash/orderBy"
import "../Dialogs.scss"
import DialogsItem from "../DialogsItem"

interface DialogListProps {
  dialogs: any
}

const DialogList = ({dialogs}: DialogListProps) => {
  return (
    <div className="dialogs">
      {_orderBy(dialogs, d => new Date(d.message.createdAt), ["desc"]).map(
        (d: any) => (
          <DialogsItem key={d._id} {...d} />
        )
      )}
    </div>
  )
}

export default DialogList
