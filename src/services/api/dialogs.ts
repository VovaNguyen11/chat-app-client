import {IDialog} from "types"
import {GET, POST} from "../network.service"

const dialogsApi = {
  getDialogs: async () => {
    try {
      const res: IDialog[] = await GET("/dialogs")
      return res
    } catch (err) {
      throw new Error(err)
    }
  },
  addDialog: (partnerId: string, text: string) => {
    console.log(partnerId);
    
    try {
      const data = POST("/dialogs/create", {partner: partnerId, text})
      return data
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default dialogsApi
