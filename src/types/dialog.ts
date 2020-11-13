import {IUser} from "types"

export interface IDialog {
  _id: string
  message: {
    text: string
    createdAt: string
  }
  partner: IUser
  isMe?: boolean
  isChecked: boolean
}
