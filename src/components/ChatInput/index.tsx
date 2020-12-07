import React, {useState, useEffect} from "react"
import {useSelector} from "react-redux"
import {messagesApi} from "services/api"
import socket from "services/socket.io"

import {RootState} from "store/reducers"

import {
  Button,
  EmojiPicker,
  AttachmentsWall,
  FileUploader,
  AudioRecorder,
} from "components"
import {Input} from "antd"
import {RcFile} from "antd/lib/upload/interface"
import {SendOutlined, CloseOutlined, LoadingOutlined} from "@ant-design/icons"

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
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>()
  const [audioLoading, setAudioLoading] = useState(false)

  const {currentDialogId} = useSelector(({dialogs}: RootState) => ({
    currentDialogId: dialogs.currentDialogId,
  }))

  useEffect(() => {
    setContentHeight(
      messagesFooterRef.current.offsetHeight +
        messagesHeaderRef.current.offsetHeight
    )
  }, [attachments, messagesFooterRef, messagesHeaderRef, setContentHeight])

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    socket.emit("DIALOGS:TYPING", currentDialogId)
    setInputValue(e.target.value)
  }

  const handleEnterKeyPressed = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSendMessage = () => {
    if (isRecording) {
      mediaRecorder?.stop()
    } else if (inputValue || attachments.length) {
      messagesApi.sendMessage(inputValue, currentDialogId, attachments)
      setInputValue("")
      setAttachments([])
    }
  }
  const handleSendAudio = (audioFile: RcFile) =>
    messagesApi.sendMessage("", currentDialogId, [audioFile])

  const cancelRecording = () => setIsRecording(false)

  return (
    <div className="chat-input">
      {isRecording ? (
        <div className="chat-input--recording">
          <i className="chat-input--recording-bubble"></i>
          Recording...
          <Button
            onClick={cancelRecording}
            type="link"
            shape="circle"
            icon={<CloseOutlined />}
          />
        </div>
      ) : (
        <>
          <div className="chat-input__attachment">
            <FileUploader setAttachments={setAttachments} />
          </div>
          <Input.TextArea
            size="middle"
            placeholder="Write a message..."
            onChange={onInputChange}
            onKeyDown={handleEnterKeyPressed}
            value={inputValue}
          />
        </>
      )}

      <div className="chat-input__actions">
        {!isRecording && <EmojiPicker setInputValue={setInputValue} />}
        {audioLoading ? (
          <Button
            type="link"
            size="large"
            shape="circle"
            icon={<LoadingOutlined />}
          />
        ) : isRecording || inputValue.trim() || attachments.length ? (
          <Button
            onClick={handleSendMessage}
            type="link"
            size="large"
            shape="circle"
            icon={<SendOutlined />}
          />
        ) : (
          <AudioRecorder
            setMediaRecorder={setMediaRecorder}
            setIsRecording={setIsRecording}
            handleSendAudio={handleSendAudio}
            setAudioLoading={setAudioLoading}
          />
        )}
      </div>
      {attachments.length > 0 && (
        <AttachmentsWall
          attachments={attachments}
          setAttachments={setAttachments}
        />
      )}
    </div>
  )
}

export default ChatInput
