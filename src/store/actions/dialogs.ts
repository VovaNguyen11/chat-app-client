import {RootState} from "store/reducers"
import {ThunkAction} from "redux-thunk"
import {Action} from "redux"
import socket from "services/socket.io"
import {dialogsApi} from "services/api"

import {IDialog} from "types"

import {
  SET_DIALOGS,
  SET_CURRENT_DIALOG,
  SET_DIALOGS_LOADING,
} from "../actions_constants"

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const setDialogs = (data: IDialog[]) => ({
  type: SET_DIALOGS,
  payload: data,
})
const setCurrentDialog = (id: string | undefined) => ({
  type: SET_CURRENT_DIALOG,
  payload: id,
})

export const setCurrentDialogAction = (
  id: string | undefined
): AppThunk => dispatch => {
  socket.emit("DIALOGS:JOIN", id)
  dispatch(setCurrentDialog(id))
}

export const setDialogsLoadingAction = (value: boolean) => ({
  type: SET_DIALOGS_LOADING,
  payload: value,
})

export const fetchDialogsAction = (): AppThunk => async dispatch => {
  dispatch(setDialogsLoadingAction(true))
  const data = await dialogsApi.getDialogs()
  dispatch(setDialogs(data))
}
