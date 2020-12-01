import React, {useState, useEffect} from "react"
import {Upload, Modal} from "antd"
import {UploadFile, RcFile} from "antd/lib/upload/interface"

import "./FileUploader.scss"

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

interface FileUploaderProps {
  attachments: RcFile[]
  handleAttachmentRemove: (
    file: UploadFile
  ) => boolean | void | Promise<boolean>
}

const FileUploader = ({
  attachments,
  handleAttachmentRemove,
}: FileUploaderProps) => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [fileList, setFileList] = useState<UploadFile<any>[]>([])

  useEffect(() => {
    setFileList(attachments)
  }, [attachments])

  const handleCancel = () => setPreviewVisible(false)

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
  }

  const handleChange = ({fileList}: any) => setFileList(fileList)

  return (
    <div className="file-uploader">
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleAttachmentRemove}
      />
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{width: "100%"}} src={previewImage} />
      </Modal>
    </div>
  )
}

export default FileUploader
