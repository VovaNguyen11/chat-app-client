import React, {useState, useEffect} from "react"
import {useSelector} from "react-redux"
import {messagesApi, attachmentsApi} from "services/api"

import {RootState} from "store/reducers"

import {Button, EmojiPicker, FileUploader} from "components"
import {Input, Upload} from "antd"
import {
  RcCustomRequestOptions,
  RcFile,
  UploadFile,
} from "antd/lib/upload/interface"
import {CameraOutlined, SendOutlined, AudioOutlined} from "@ant-design/icons"

import "./ChatInput.scss"

interface ChatInputProps {
  setContentHeight: React.Dispatch<React.SetStateAction<number>>
  messagesFooterRef: React.MutableRefObject<HTMLDivElement>
  messagesHeaderRef: React.MutableRefObject<HTMLDivElement>
}

const ChatInput = ({
  setContentHeight,
  messagesFooterRef,
  messagesHeaderRef,
}: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("")
  const [attachments, setAttachments] = useState<RcFile[]>([])
  const {currentDialogId} = useSelector(({dialogs}: RootState) => ({
    currentDialogId: dialogs.currentDialogId,
  }))

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setInputValue(e.target.value)

  const handleSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      messagesApi.sendMessage(inputValue, currentDialogId, attachments)
      setInputValue("")
      setAttachments([])
    }
  }
  const handleAttachmentRemove = (file: UploadFile) =>
    setAttachments(attachments.filter(f => f.uid !== file.uid))

  useEffect(() => {
    setContentHeight(
      messagesFooterRef.current.clientHeight +
        messagesHeaderRef.current.clientHeight
    )
  }, [attachments])

  const UploadProps = {
    multiple: true,
    showUploadList: false,
    async customRequest({file, filename}: RcCustomRequestOptions) {
      const formData = new FormData()
      formData.append(filename, file)

      setAttachments(prevState => [
        ...prevState,
        {...file, status: "uploading"},
      ])

      const res = await attachmentsApi.upload(formData)

      setAttachments(prevState =>
        prevState.map(f => {
          if (f.uid === file.uid) {
            return {
              ...res,
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
    <div className="chat-input">
      <div className="chat-input__emoji">
        <EmojiPicker setInputValue={setInputValue} />
      </div>
      <Input.TextArea
        size="middle"
        placeholder="Write a message..."
        onChange={onInputChange}
        onKeyDown={handleSendMessage}
        value={inputValue}
      />
      <div className="chat-input__actions">
        <Upload {...UploadProps} name="file">
          <Button type="link" shape="circle" icon={<CameraOutlined />} />
        </Upload>
        <Button
          onClick={() => console.log("Audio Record")}
          type="link"
          shape="circle"
          icon={<AudioOutlined />}
        />
        <Button
          onClick={() => console.log("Send")}
          type="link"
          shape="circle"
          icon={<SendOutlined />}
        />
      </div>

      {attachments.length > 0 && (
        <FileUploader
          attachments={attachments}
          handleAttachmentRemove={handleAttachmentRemove}
        />
      )}
    </div>
  )
}

export default ChatInput
