import {RcFile} from "antd/lib/upload/interface"
import {IMessage} from "types"
import {GET, POST, DELETE} from "../network.service"

const messagesApi = {
  async getMessages(currentDialogId: string) {
    const res: IMessage[] = await GET(`/messages?dialogId=${currentDialogId}`)
    return res
  },

  sendMessage: (text: string, dialogId: string, attachments: RcFile[]) =>
    POST("/messages", {text, dialogId, attachments}),

  removeMessage: (messageId: string) => DELETE(`/messages/${messageId}`),
}

export default messagesApi
