import {IMessage} from "types"
import {GET} from "../network.service"

const messagesApi = {
  async getMessages(currentDialogId: string): Promise<any> {
    try {
      const res: IMessage[] = await GET(`/messages?dialogId=${currentDialogId}`)
      return res
    } catch (error) {
      return error
    }
  },
}

export default messagesApi
