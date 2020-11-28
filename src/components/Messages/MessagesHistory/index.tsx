import React, {useMemo} from "react"
import {useSelector} from "react-redux"
import {RootState} from "store/reducers"

import {ChatInput, StatusBar, MessagesList} from "components"

import "./MessagesHistory.scss"

const MessagesHistory = () => {
  const {dialogs, currentDialogId, user} = useSelector(
    ({dialogs, user}: RootState) => ({
      dialogs: dialogs.items,
      currentDialogId: dialogs.currentDialogId,
      user: user.data,
    })
  )

  const partner = useMemo(() => {
    const currentDialog =
      dialogs.length && dialogs.find(d => d._id === currentDialogId)

    if (currentDialog && user) {
      return currentDialog.author._id === user._id
        ? currentDialog.partner
        : currentDialog.author
    }
  }, [dialogs, currentDialogId, user])

  return (
    <div className="messages__history">
      <div className="messages__history-header">
        <StatusBar partner={partner} />
      </div>
      <div className="messages__history-content">
        <MessagesList />
      </div>
      <div className="messages__history-footer">
        <ChatInput />
      </div>
    </div>
  )
}

export default MessagesHistory
