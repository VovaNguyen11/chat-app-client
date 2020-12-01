import React, {useMemo, useRef, useState} from "react"
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

  const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const footerRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const [contentHeight, setContentHeight] = useState(0)

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
      <div className="messages__history-header" ref={headerRef}>
        <StatusBar partner={partner} />
      </div>
      <div
        className="messages__history-content"
        style={{height: `calc(100% - ${contentHeight}px )`}}
      >
        <MessagesList />
      </div>
      <div className="messages__history-footer" ref={footerRef}>
        <ChatInput
          setContentHeight={setContentHeight}
          messagesFooterRef={footerRef}
          messagesHeaderRef={headerRef}
        />
      </div>
    </div>
  )
}

export default MessagesHistory
