import {AttachmentsActionType, IAttachmentsState} from "types"

import {ADD_ATTACHMENT, REMOVE_ATTACHMENT} from "store/actions_constants"

const initialState: IAttachmentsState = {
  items: [],
}

const attachments = (
  state = initialState,
  action: AttachmentsActionType
): IAttachmentsState => {
  switch (action.type) {
    case ADD_ATTACHMENT:
      return {
        items: [...state.items, action.payload],
      }
    case REMOVE_ATTACHMENT:
      return {
        items: state.items.filter(i => i._id !== action.payload),
      }
    default:
      return state
  }
}

export default attachments
