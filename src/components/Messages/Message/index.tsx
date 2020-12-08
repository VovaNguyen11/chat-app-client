import React from "react"
import classNames from "classnames"

import {messagesApi} from "services/api"
import {getMessageTime} from "utils/helpers"

import {IconCkecked, MessageAudio, Button} from "components"
import {Popover, Modal} from "antd"
import {EllipsisOutlined, ExclamationCircleOutlined} from "@ant-design/icons"

import {isAudio} from "utils/helpers"

import {IAttachment, IMessage} from "types"

import "./Message.scss"

const showConfirm = (_id: string) => {
  Modal.confirm({
    title: "Are you sure you want to delete this message?",
    icon: <ExclamationCircleOutlined />,
    maskClosable: true,
    zIndex: 1031,
    onOk() {
      messagesApi.removeMessage(_id)
    },
  })
}
interface MessageProps extends IMessage {
  setPreviewImage: React.Dispatch<React.SetStateAction<string>>
}

const Message = ({
  _id,
  text,
  createdAt,
  isChecked,
  attachments,
  isMe,
  setPreviewImage,
}: MessageProps) => {
  const renderAttachment = (item: IAttachment) => {
    if (item.ext !== "webm" && item.ext !== "wav") {
      return (
        <div
          key={item._id}
          className="message__attachments-item"
          onClick={() => setPreviewImage(item.url)}
        >
          <img src={item.url} alt={item.fileName} />
        </div>
      )
    } else {
      return <MessageAudio key={item._id} audioSrc={item.url} />
    }
  }

  return (
    <div
      className={classNames(
        "message",
        {"message--is-me": isMe},
        {
          "message--image":
            attachments &&
            !isAudio(attachments) &&
            attachments.length === 1 &&
            !text,
        }
      )}
    >
      {/* <div className="message__avatar">
        <Avatar user={user} />
      </div> */}
      <div className="message__content">
        {text && (
          <div className="message__bubble">
            <div className="message__text">
              {/* {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                  <Emoji key={i} emoji={match} set="apple" size={16} />
                ))} */}
              {text}
            </div>
          </div>
        )}
        {attachments && (
          <div className="message__attachments">
            {attachments.map(item => renderAttachment(item))}
          </div>
        )}
        {isMe && (
          <>
            <div className="message__status">
              <IconCkecked isChecked={isChecked} />
            </div>
            <Popover
              placement="left"
              content={
                <Button type="text" onClick={() => showConfirm(_id)}>
                  Remove message
                </Button>
              }
              trigger="click"
            >
              <div className="message__icon-actions">
                <Button type="text" icon={<EllipsisOutlined />} />
              </div>
            </Popover>
          </>
        )}
      </div>
      {createdAt && (
        <div className="message__date">
          {getMessageTime(new Date(createdAt))}
          {/* <Time date={createdAt} /> */}
        </div>
      )}
    </div>
  )
}

export default Message
