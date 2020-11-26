import {POST, GET} from "../network.service"

import {ILoginFormValues, IRegistrationFormValues} from "types"

const userApi = {
  signUp(postData: IRegistrationFormValues) {
    return POST("/user/signup", postData)
  },
  signIn(postData: ILoginFormValues) {
    return POST("/user/signin", postData)
  },
  verifyEmail(hashQuery: string) {
    return GET(`/user/verify${hashQuery}`)
  },
  getUserData() {
    return GET("/user/me")
  },
}

export default userApi
