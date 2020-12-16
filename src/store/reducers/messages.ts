import {
  ADD_MESSAGE,
  REMOVE_MESSAGE,
  SET_MESSAGES,
  SET_MESSAGES_LOADING,
  UPDATE_CHECKED_STATUS,
} from "store/actions_constants"

import {IMessagesState, MessagesActionType} from "types"

const initialState: IMessagesState = {
  items: [],
  isLoading: false,
}

const messages = (
  state = initialState,
  action: MessagesActionType
): IMessagesState => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        items: action.payload,
        isLoading: false,
      }
    case ADD_MESSAGE:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case REMOVE_MESSAGE:
      return {
        ...state,
        items: state.items.filter(message => message._id !== action.payload),
      }
    case UPDATE_CHECKED_STATUS:
      return {
        ...state,
        items: state.items.map(message => {
          if (message.user._id !== action.payload.userId) {
            return {...message, isChecked: true}
          }
          return message
        }),
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

export default messages
