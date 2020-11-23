import {POST, GET} from "../network.service"

import {ILoginFormValues} from "modules/types"

const userApi = {
  signIn(postData: ILoginFormValues) {
    return POST("/user/signin", postData)
  },
  getUserData() {
    return GET("/user/me")
  },
}

export default userApi
