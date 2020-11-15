import React, {useEffect, useRef} from "react"
import {connect, ConnectedProps} from "react-redux"
import {RootState} from "store/reducers"

import {fetchMessagesAction} from "store/actions/messages"

import {MessagesList as BaseMessagesList} from "components"

interface DialogsListProps extends PropsFromRedux {}

const MessagesList = ({
  messages,
  currentDialogId,
  isLoading,
  fetchMessagesAction,
}: DialogsListProps) => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (currentDialogId) {
      fetchMessagesAction(currentDialogId)
    }
  }, [currentDialogId, fetchMessagesAction])

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
  }, [messages])

  return (
    <BaseMessagesList
      messages={messages}
      isLoading={isLoading}
      messagesRef={messagesRef}
      currentDialogId={currentDialogId}
    />
  )
}

const mapStateToProps = ({messages, dialogs}: RootState) => ({
  currentDialogId: dialogs.currentDialogId,
  messages: messages.items,
  isLoading: messages.isLoading,
})

const mapDispatchToProps = {
  fetchMessagesAction,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(MessagesList)
