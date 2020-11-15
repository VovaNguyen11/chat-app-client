import React from "react"
import {EllipsisOutlined} from "@ant-design/icons"

import {ChatInput, Button} from "components"
import {MessagesList} from "containers"

import "./MessagesHistory.scss"

const MessagesHistory = () => {
  return (
    <div className="messages__history">
      <div className="messages__history-header">
        <div className="messages__history-status-bar">
          <h3>Вова</h3>
          <span>Онлайн</span>
        </div>
        <Button
          onClick={() => console.log("Status Bar options")}
          type="link"
          shape="circle"
          icon={<EllipsisOutlined />}
        />
      </div>
      <div className="messages__history-content">
        <MessagesList />
      </div>

      <div className="messages__history-footer">
        <ChatInput />
      </div>
    </div>
  )
}

export default MessagesHistory
