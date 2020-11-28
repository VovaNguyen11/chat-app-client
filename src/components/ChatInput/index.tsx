import React, {useState} from "react"
import {useSelector} from "react-redux"
import {messagesApi} from "services/api"

import {RootState} from "store/reducers"

import {Button, EmojiPicker} from "components"
import {Input} from "antd"
import {CameraOutlined, SendOutlined, AudioOutlined} from "@ant-design/icons"

import "./ChatInput.scss"

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("")
  const {currentDialogId} = useSelector(({dialogs}: RootState) => ({
    currentDialogId: dialogs.currentDialogId,
  }))

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setInputValue(e.target.value)

  const handleSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      messagesApi.sendMessage(inputValue, currentDialogId)
      setInputValue("")
    }
  }

  return (
    <div className="chat-input">
      <div className="chat-input__emoji">
        <EmojiPicker />
      </div>
      <Input.TextArea
        size="middle"
        placeholder="Write a message..."
        onChange={onInputChange}
        onKeyDown={handleSendMessage}
        value={inputValue}
      />
      <div className="chat-input__actions">
        <Button
          onClick={() => console.log("Send attcahments")}
          type="link"
          shape="circle"
          icon={<CameraOutlined />}
        />
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
    </div>
  )
}

export default ChatInput
