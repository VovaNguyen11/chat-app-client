import {IDialog} from "types"
import {GET} from "../network.service"

const dialogsApi = {
  async getDialogs(): Promise<any> {
    try {
      const res: IDialog[] = await GET("/dialogs")
      return res
    } catch (error) {
      return error
    }
  },
}

export default dialogsApi
