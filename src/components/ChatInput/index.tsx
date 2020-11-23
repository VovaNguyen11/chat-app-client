import React from "react"
import {Input} from "antd"
import {Button, EmojiPicker} from "components"

import {CameraOutlined, SendOutlined, AudioOutlined} from "@ant-design/icons"

import "./ChatInput.scss"

const ChatInput = () => {
  return (
    <div className="chat-input">
      <div className="chat-input__emoji">
        <EmojiPicker />
      </div>
      <Input.TextArea size="middle" placeholder="Write a message..." />
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
