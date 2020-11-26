import {RootState} from "store/reducers"
import {ThunkAction} from "redux-thunk"
import {Action} from "redux"

import {messagesApi} from "services/api"

import {IMessage} from "types"

import {SET_MESSAGES, SET_MESSAGES_LOADING} from "../actions_constants"

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const setMessages = (data: IMessage[]) => ({
  type: SET_MESSAGES,
  payload: data,
})

const setMessagesLoading = (value: boolean) => ({
  type: SET_MESSAGES_LOADING,
  payload: value,
})

export const fetchMessagesAction = (
  currentDialogId: string
): AppThunk => dispatch => {
  dispatch(setMessagesLoading(true))
  messagesApi
    .getMessages(currentDialogId)
    .then((data: IMessage[]) => dispatch(setMessages(data)))
    .catch(err => {
      throw err
    })
}
