import {combineReducers} from "redux"
import dialogs from "./dialogs"
import messages from "./messages"

export const rootReducer = combineReducers({
  dialogs,
  messages,
})

export type RootState = ReturnType<typeof rootReducer>
