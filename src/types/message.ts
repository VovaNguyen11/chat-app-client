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
