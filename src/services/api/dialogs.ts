import {IDialog} from "types"
import {GET, POST} from "../network.service"

const dialogsApi = {
  getDialogs: async () => {
    try {
      const res: IDialog[] = await GET("/dialogs")
      return res
    } catch (error) {
      return error
    }
  },
  addDialog: (partnerId: string, text: string) => {
    return POST("/dialogs/create", {partner: partnerId, text})
  },
}

export default dialogsApi
