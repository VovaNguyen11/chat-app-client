import React from "react"
import {Picker} from "emoji-mart"
import "emoji-mart/css/emoji-mart.css"
import {SmileOutlined} from "@ant-design/icons"

import {Button} from "components"
import UseOutsideClick from "hooks/useOutsideClick"

import "./EmojiPicker.scss"

const index = () => {
  const {ref, isVisible, setIsVisible} = UseOutsideClick(false)

  const toggleEmojiPicker = () =>
    setIsVisible((isVisible: boolean) => !isVisible)
  
    return (
    <div ref={ref}>
      <div className="emoji-picker">
        {isVisible && (
          <Picker set="apple" title="Pick your emoji" emoji="blush" />
        )}
      </div>

      <Button
        onClick={toggleEmojiPicker}
        type="link"
        shape="circle"
        icon={<SmileOutlined />}
      />
    </div>
  )
}

export default index
