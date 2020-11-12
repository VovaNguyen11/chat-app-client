import React from "react"
import {Message} from "components"
import {EllipsisOutlined} from "@ant-design/icons"

import "./MessagesHistory.scss"
import {ChatInput} from "components"

const MessagesHistory = () => {
  return (
    <div className="messages__history">
      <div className="messages__history-header">
        <div className="messages__history-status-bar">
          <h3>Вова</h3>
          <span>Онлайн</span>
        </div>
        <EllipsisOutlined />
      </div>
      <div className="messages__history-content">
        <div className="messages__list">
          <Message
            user={{
              avatarSrc:
                "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
              fullName: "Vova",
            }}
            text="Hi there. How was your day?"
            date={new Date(2020, 10, 6, 17)}
            attachments={[
              {
                _id: `${Math.random()}`,
                fileName: "image",
                url: "https://source.unsplash.com/100x100/?water",
                ext: "jpg",
              },
              {
                _id: `${Math.random()}`,
                fileName: "image",
                url: "https://source.unsplash.com/100x100/?city",
                ext: "jpg",
              },
              {
                _id: `${Math.random()}`,
                fileName: "image",
                url: "https://source.unsplash.com/100x100/?nature",
                ext: "jpg",
              },
            ]}
          />
          <Message
            user={{
              avatarSrc:
                "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
              fullName: "John Achtenberg",
            }}
            text="Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? "
            date={new Date(2020, 10, 6, 17, 4)}
            isMe
            isChecked
          />
          <Message
            user={{
              avatarSrc:
                "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
              fullName: "John Achtenberg",
            }}
            isTyping
          />
          <Message
            user={{
              fullName: "Elon Musk",
              avatarSrc:
                "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
            }}
            date={new Date(2020, 10, 7, 18)}
            attachments={[
              {
                _id: "1",
                fileName: "image",
                url:
                  "https://freesound.org/data/previews/542/542450_5674468-lq.mp3",
                ext: "webm",
              },
            ]}
          />
          <Message
            user={{
              fullName: "Elon Musk",
              avatarSrc:
                "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
            }}
            date={new Date(2020, 10, 7, 18)}
            attachments={[
              {
                _id: "1",
                fileName: "image",
                url:
                  "https://freesound.org/data/previews/33/33837_215874-lq.mp3",
                ext: "webm",
              },
            ]}
            isMe
          />
          <Message
            user={{
              _id: "k2pf030240811eb9168931778d09dbc",
              fullName: "Elon Musk",
            }}
            text="helllo"
            date={new Date(2020, 10, 7, 18)}
          />
          <Message
            user={{
              _id: "54e1c50a60415320c05c8050ef91189d",
              fullName: "Vova Nguyen",
            }}
            text="Im good"
            date={new Date(2020, 10, 7, 18)}
          />
          <Message
            user={{
              _id: "54e1c50a60415320c05c8050ef91189d",
              fullName: "Vova Nguyen",
            }}
            text="Im good"
            date={new Date(2020, 10, 7, 18)}
          />
          <Message
            user={{
              _id: "54e1c50a60415320c05c8050ef91189d",
              fullName: "Vova Nguyen",
            }}
            text="Im good"
            date={new Date(2020, 10, 7, 18)}
          />
        </div>
      </div>

      <div className="messages__history-footer">
        <ChatInput />
      </div>
    </div>
  )
}

export default MessagesHistory
