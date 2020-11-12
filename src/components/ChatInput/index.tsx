import React from "react"
import {Input} from "antd"
import {Button} from "components"
import {
  SmileOutlined,
  CameraOutlined,
  SendOutlined,
  AudioOutlined,
} from "@ant-design/icons"

import "./ChatInput.scss"

const ChatInput = () => {
  return (
    <div className="chat-input">
      <div className="chat-input__emoji">
        <Button
          onClick={() => console.log(123)}
          type="link"
          shape="circle"
          icon={<SmileOutlined />}
        />
      </div>
      <Input size="middle" placeholder="Write a message..." />

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
