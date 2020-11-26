import {SET_USER, SET_IS_AUTH} from "store/actions_constants"
import {IUserState, UserActionType} from "types"

const initialState: IUserState = {
  data: null,
  isAuth: !!window.localStorage.token,
}

const user = (state = initialState, action: UserActionType): IUserState => {
  switch (action.type) {
    case SET_USER:
      return {
        data: action.payload,
        isAuth: true,
      }
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      }
    default:
      return state
  }
}

export default user
