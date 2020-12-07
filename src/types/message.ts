import {
  ADD_MESSAGE,
  REMOVE_MESSAGE,
  SET_MESSAGES,
  SET_MESSAGES_LOADING,
} from "store/actions_constants"
import {IUser, IAttachment} from "types"

export interface IMessage {
  _id: string
  user: IUser
  createdAt?: string
  text?: string
  attachments?: Array<IAttachment>
  isMe?: boolean
  isChecked?: boolean
  dialog: string
}

export interface IMessagesState {
  items: IMessage[]
  isLoading: boolean
}

interface ISetMessagesAction {
  type: typeof SET_MESSAGES
  payload: IMessage[]
}

interface IAddMessageAction {
  type: typeof ADD_MESSAGE
  payload: IMessage
}

interface IRemoveMessageAction {
  type: typeof REMOVE_MESSAGE
  payload: string
}

interface ISetMessagesLoadingAction {
  type: typeof SET_MESSAGES_LOADING
  payload: boolean
}

export type MessagesActionType =
  | ISetMessagesAction
  | IAddMessageAction
  | IRemoveMessageAction
  | ISetMessagesLoadingAction
