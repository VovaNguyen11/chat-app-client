import {SET_USER, SET_IS_AUTH} from "store/actions_constants"

export interface IUser {
  _id: string
  email: string
  fullName: string
  avatarSrc?: string
  isOnline?: boolean
}

export interface IUserState {
  data: IUser | null
  isAuth: boolean
}

export interface ISetUserAction {
  type: typeof SET_USER
  payload: IUser
}

export interface ISetIsAuth {
  type: typeof SET_IS_AUTH
  payload: boolean
}

export type UserActionType = ISetUserAction | ISetIsAuth
