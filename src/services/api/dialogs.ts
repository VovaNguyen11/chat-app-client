import {IDialog} from "types"
import {GET, POST} from "../network.service"

const dialogsApi = {
  getDialogs: async () => {
    const res: IDialog[] = await GET("/dialogs")
    return res
  },
  addDialog: (partnerId: string, text: string) => {
    return POST("/dialogs/create", {partner: partnerId, text})
  },
}

export default dialogsApi
