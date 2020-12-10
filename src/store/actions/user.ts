import {Action} from "redux"
import {ThunkAction} from "redux-thunk"
import NetworkService from "services/network.service"

import {SET_USER, SET_IS_AUTH} from "../actions_constants"
import {RootState} from "store/reducers"
import {IUser} from "types"
import {ILoginFormValues} from "types"

import {userApi} from "services/api"

type AppThunk<ReturnType = Promise<any>> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const setUser = (data: IUser) => ({
  type: SET_USER,
  payload: data,
})

export const setIsAuth = (value: boolean) => ({
  type: SET_IS_AUTH,
  payload: value,
})

export const getUserDataAction = (): AppThunk => async (
  dispatch
): Promise<any> => {
  const data: IUser = await userApi.getUserData()
  dispatch(setUser(data))
  if (!data.confirmed) {
    dispatch(setIsAuth(false))
    delete window.localStorage.token
  } else {
    dispatch(setIsAuth(true))
  }
  return data
}

export const userLoginAction = (
  postData: ILoginFormValues
): AppThunk => async (): Promise<any> => {
  const {token} = await userApi.signIn(postData)
  NetworkService.api.defaults.headers.common["token"] = token
  window.localStorage.token = token
}
