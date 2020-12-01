import {ADD_ATTACHMENT, REMOVE_ATTACHMENT} from "store/actions_constants"

export interface IAttachment {
  _id: string
  fileName: string
  url: string
  ext: string
  size: number
  uid: string
  name: string
  type: string
}

export interface IAttachmentsState {
  items: IAttachment[]
}

interface IAddAttachmentAction {
  type: typeof ADD_ATTACHMENT
  payload: IAttachment
}

interface IRemoveAttachmentAction {
  type: typeof REMOVE_ATTACHMENT
  payload: string
}

export type AttachmentsActionType =
  | IAddAttachmentAction
  | IRemoveAttachmentAction
