import React, {useState, useEffect, memo} from "react"
import {connect, ConnectedProps} from "react-redux"
import {RootState} from "store/reducers"

import {DialogsList as BaseDialogsList} from "components"

import {fetchDialogsAction, setCurrentDialogAction} from "store/actions/dialogs"

import {IDialog} from "types"

interface DialogsListProps extends PropsFromRedux {
  searchValue: string
}

const DialogsList = ({
  dialogs,
  searchValue,
  isLoading,
  fetchDialogsAction,
  setCurrentDialogAction,
}: DialogsListProps) => {
  const [filteredDialogs, setFilteredDialogs] = useState<Array<IDialog>>([])

  useEffect(() => {
    fetchDialogsAction()
  }, [fetchDialogsAction])

  useEffect(() => {
    setFilteredDialogs(dialogs)
    if (searchValue) {
      setFilteredDialogs(
        dialogs.filter(
          dialog =>
            dialog.message.partner.fullName
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) >= 0
        )
      )
    }
  }, [searchValue, dialogs])

  return (
    <BaseDialogsList
      dialogs={filteredDialogs}
      setCurrentDialogAction={setCurrentDialogAction}
      isLoading={isLoading}
    />
  )
}

const mapStateToProps = ({dialogs}: RootState) => ({
  dialogs: dialogs.items,
  isLoading: dialogs.isLoading,
})

const mapDispatchToProps = {
  fetchDialogsAction,
  setCurrentDialogAction,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(memo(DialogsList))
