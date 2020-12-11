import {IDialogsState, DialogsActionType} from "types"

import {
  ADD_DIALOG,
  SET_CURRENT_DIALOG,
  SET_DIALOGS,
  SET_DIALOGS_LOADING,
  UPDATE_DIALOG_ITEM,
  UPDATE_LAST_MESSAGE_STATUS,
} from "store/actions_constants"

const initialState: IDialogsState = {
  items: [],
  currentDialogId: "",
  isLoading: false,
}

const dialogs = (
  state = initialState,
  action: DialogsActionType
): IDialogsState => {
  switch (action.type) {
    case SET_DIALOGS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      }
    case SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialogId: action.payload,
      }
    case ADD_DIALOG:
      return {...state, items: [...state.items, action.payload]}
    case UPDATE_DIALOG_ITEM:
      return {
        ...state,
        items: state.items.map(dialog =>
          dialog._id === action.payload._id ? action.payload : dialog
        ),
      }
    case UPDATE_LAST_MESSAGE_STATUS:
      return {
        ...state,
        items: state.items.map(dialog => {
          if (dialog._id === action.payload) {
            return {
              ...dialog,
              lastMessage: {...dialog.lastMessage, isChecked: true},
            }
          }

          return dialog
        }),
      }
    case SET_DIALOGS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

export default dialogs
