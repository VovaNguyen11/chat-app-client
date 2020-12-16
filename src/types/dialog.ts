import {
  SET_DIALOGS,
  ADD_DIALOG,
  SET_CURRENT_DIALOG,
  SET_DIALOGS_LOADING,
  UPDATE_DIALOG_ITEM,
  UPDATE_LAST_MESSAGE_STATUS
} from "store/actions_constants"

import {IUser, IMessage} from "types"

export interface IDialog {
  _id: string
  lastMessage: IMessage
  partner: IUser
  author: IUser
  createdAt: string
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

interface IAddDialogAction {
  type: typeof ADD_DIALOG
  payload: IDialog
}

interface IUpdateDialogItemAction {
  type: typeof UPDATE_DIALOG_ITEM
  payload: IDialog
}

interface IUpdateLastMessageStatusAction {
  type: typeof UPDATE_LAST_MESSAGE_STATUS
  payload: {
    dialogId: string
    userId: string
  }
}

export type DialogsActionType =
  | ISetDialogsAction
  | ISetCurrentDialogAction
  | ISetDialogsLoadingAction
  | IAddDialogAction
  | IUpdateDialogItemAction
  | IUpdateLastMessageStatusAction
