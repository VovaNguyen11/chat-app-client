import {combineReducers} from "redux"
import dialogs from "./dialogs"
import messages from "./messages"
import user from "./user"

export const rootReducer = combineReducers({
  dialogs,
  messages,
  user,
})

export type RootState = ReturnType<typeof rootReducer>
