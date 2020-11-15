import {SET_MESSAGES, SET_MESSAGES_LOADING} from "store/actions_constants"

import {IMessagesState, MessagesActionType} from "types"

const initialState: IMessagesState = {
  items: [],
  isLoading: false,
}

const dialogs = (
  state = initialState,
  action: MessagesActionType
): IMessagesState => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        items: action.payload,
        isLoading: false,
      }
    case SET_MESSAGES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

export default dialogs
