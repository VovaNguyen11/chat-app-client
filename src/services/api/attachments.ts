import {POST} from "../network.service"

const attachmentsApi = {
  upload(formData: FormData) {
    return POST("/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
}

export default attachmentsApi
