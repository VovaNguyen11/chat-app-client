import {RootState} from "store/reducers"
import {ThunkAction} from "redux-thunk"
import {Action} from "redux"

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

export const setCurrentDialogAction = (id: string) => ({
  type: SET_CURRENT_DIALOG,
  payload: id,
})

export const setDialogsLoadingAction = (value: boolean) => ({
  type: SET_DIALOGS_LOADING,
  payload: value,
})

export const fetchDialogsAction = (): AppThunk => dispatch => {
  dispatch(setDialogsLoadingAction(true))
  dialogsApi
    .getDialogs()
    .then((data: IDialog[]) => dispatch(setDialogs(data)))
    .catch(err => {
      throw err
    })
}
