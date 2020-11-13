import React, {useState, useCallback} from "react"

import {DialogsList as Dialogs} from "components"

import {IDialog} from "types"

interface DialogsListProps {
  dialogs: Array<IDialog>
}

const DialogsList = ({dialogs}: DialogsListProps) => {
  const [filteredDialogs, setFilteredDialogs] = useState<Array<IDialog>>(
    dialogs
  )
  const handleSearch = useCallback(
    (value: string) => {
      setFilteredDialogs(
        dialogs.filter(
          dialog =>
            dialog.partner.fullName
              .toLowerCase()
              .indexOf(value.toLowerCase()) >= 0
        )
      )
    },
    [dialogs]
  )

  return <Dialogs handleSearch={handleSearch} dialogs={filteredDialogs} />
}

export default DialogsList
