import {SET_MESSAGES, SET_MESSAGES_LOADING} from "store/actions_constants"
import {IUser, IAttachment} from "types"

export interface IMessage {
  user: IUser
  createdAt?: string
  text?: string
  attachments?: Array<IAttachment>
  isMe?: boolean
  isChecked?: boolean
  isTyping?: boolean
}

export interface IMessagesState {
  items: IMessage[]
  isLoading: boolean
}

interface ISetMessagesAction {
  type: typeof SET_MESSAGES
  payload: IMessage[]
}

interface ISetMessagesLoadingAction {
  type: typeof SET_MESSAGES_LOADING
  payload: boolean
}

export type MessagesActionType = ISetMessagesAction | ISetMessagesLoadingAction
