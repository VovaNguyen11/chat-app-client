import {Action} from "redux"
import {ThunkAction} from "redux-thunk"
import neworkService from "utils/services/network.service"
import {SET_USER, SET_IS_AUTH} from "../actions_constants"
import {RootState} from "store/reducers"
import {ILoginFormValues} from "modules/types"
import {IUser} from "types"

import {userApi} from "utils/services/api"

type AppThunk<ReturnType = void> = ThunkAction<
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

export const fetchUserData = (): AppThunk => dispatch => {
  userApi
    .getUserData()
    .then(data => {
      dispatch(setUser(data))
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch(setIsAuth(false))
        delete window.localStorage.token
      }
    })
}

export const fetchUserDataAction = (
  postData: ILoginFormValues,
  setStatus: (status?: any) => void,
  setSubmitting: (isSubmitting: boolean) => void,
  setFieldValue: (field: string, value: any) => void
): AppThunk => dispatch => {
  userApi
    .signIn(postData)
    .then(({token}) => {
      window.localStorage["token"] = token
      neworkService.api.defaults.headers.common["token"] = token
      dispatch(fetchUserData())
      dispatch(setIsAuth(true))
      setStatus()
    })
    .catch(err => {
      setStatus({error: err.response.data.message})
    })
    .finally(() => {
      setSubmitting(false)
      setFieldValue("password", "")
    })
}
