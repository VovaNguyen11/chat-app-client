import {
  SET_DIALOGS,
  SET_CURRENT_DIALOG,
  SET_DIALOGS_LOADING,
} from "store/actions_constants"

import {IUser, IMessage} from "types"

export interface IDialog {
  _id: string
  lastMessage: IMessage
  partner: IUser
  author: IUser
}

export interface IDialogsState {
  items: IDialog[]
  currentDialogId: string
  isLoading: boolean
}

interface ISetDialogsAction {
  type: typeof SET_DIALOGS
  payload: Array<IDialog>
}

interface ISetCurrentDialogAction {
  type: typeof SET_CURRENT_DIALOG
  payload: string
}

interface ISetDialogsLoadingAction {
  type: typeof SET_DIALOGS_LOADING
  payload: boolean
}

export type DialogsActionType =
  | ISetDialogsAction
  | ISetCurrentDialogAction
  | ISetDialogsLoadingAction
