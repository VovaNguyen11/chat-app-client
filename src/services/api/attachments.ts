import {POST} from "../network.service"

const attachmentsApi = {
  upload(data: any) {
    const formData = new FormData()
    formData.append("file", data)

    return POST("/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
}

export default attachmentsApi
