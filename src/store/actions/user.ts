import {Action} from "redux"
import {ThunkAction} from "redux-thunk"
import neworkService from "utils/services/network.service"
import {SET_USER, SET_IS_AUTH} from "../actions_constants"
import {RootState} from "store/reducers"
import {ILoginFormValues} from "modules/types"
import {IUser} from "types"

import {userApi} from "utils/services/api"

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

export const UserLoginAction = (postData: ILoginFormValues): AppThunk => (
  dispatch
): Promise<any> =>
  userApi
    .signIn(postData)
    .then(({token}) => {
      neworkService.api.defaults.headers.common["token"] = token
      window.localStorage.token = token
    })
    .then(() => {
      userApi.getUserData().then(data => {
        dispatch(setUser(data))
        dispatch(setIsAuth(true))
      })
    })
