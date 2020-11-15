import {IDialogsState, DialogsActionType} from "types"

import {
  SET_CURRENT_DIALOG,
  SET_DIALOGS,
  SET_DIALOGS_LOADING,
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
