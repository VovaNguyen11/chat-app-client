import React from "react"
import {RcFile, RcCustomRequestOptions} from "antd/lib/upload/interface"
import {attachmentsApi} from "services/api"

import {Button} from "components"
import {Upload, message} from "antd"
import {PaperClipOutlined} from "@ant-design/icons"

interface FileUploaderProps {
  setAttachments: React.Dispatch<React.SetStateAction<RcFile[]>>
}

const FileUploader = ({setAttachments}: FileUploaderProps) => {
  const UploadProps = {
    multiple: true,
    showUploadList: false,
    beforeUpload(file: RcFile) {
      const acceptTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"]
      if (!acceptTypes.includes(file.type)) {
        message.error("You can only upload JPG|JPEG|PNG|GIF files!", 3)
      }
      return !!acceptTypes.includes(file.type)
    },

    async customRequest({file, filename}: RcCustomRequestOptions) {
      setAttachments((prevState: RcFile[]) => [
        ...prevState,
        {...file, status: "uploading"},
      ])

      const res = await attachmentsApi.upload(file)

      setAttachments((prevState: RcFile[]) =>
        prevState.map(f => {
          if (f.uid === file.uid) {
            return {
              ...res,
              uid: f.uid,
              url: res.url,
              status: "success",
              name: filename,
            }
          } else return f
        })
      )
    },
  }

  return (
    <Upload {...UploadProps} name="file">
      <Button
        type="link"
        size="large"
        shape="circle"
        icon={<PaperClipOutlined />}
      />
    </Upload>
  )
}

export default FileUploader
