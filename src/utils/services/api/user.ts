import {POST, GET} from "../network.service"

import {ILoginFormValues} from "modules/types"

const userApi = {
  async signIn(postData: ILoginFormValues) {
    return await POST("/user/signin", postData)
  },
  async getUserData() {
    return await GET("/user/me")
  },
}

export default userApi
