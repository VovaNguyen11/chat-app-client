// import {ADD_ATTACHMENT, REMOVE_ATTACHMENT} from "../actions_constants"
import {IAttachment} from "types"


export const setAttachment = (items: IAttachment[]) => ({
  type: "SET_ATTACHMENTS",
  payload: items,
})

// const removeAttachment = file => ({
//   type: "REMOVE_ATTACHMENT",
//   payload: file,
// })
