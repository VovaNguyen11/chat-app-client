import React, {Dispatch, SetStateAction} from "react"
import {Picker, BaseEmoji} from "emoji-mart"
import "emoji-mart/css/emoji-mart.css"
import {SmileOutlined} from "@ant-design/icons"

import {Button} from "components"
import UseOutsideClick from "utils/hooks/useOutsideClick"

import "./EmojiPicker.scss"

interface EmojiPickerProps {
  setInputValue: Dispatch<SetStateAction<string>>
}

const EmojiPicker = ({setInputValue}: EmojiPickerProps) => {
  const {ref, isVisible, setIsVisible} = UseOutsideClick(false)

  const toggleEmojiPicker = () =>
    setIsVisible((isVisible: boolean) => !isVisible)

  const handleSelectEmoji = (emoji: BaseEmoji) => {
    console.log(emoji)
    setInputValue(prevState => prevState + emoji.native)
  }

  return (
    <div ref={ref}>
      <div className="emoji-picker">
        {isVisible && (
          <Picker
            set="apple"
            title="Pick your emoji"
            perLine={7}
            emojiTooltip={true}
            // native={true}
            onSelect={handleSelectEmoji}
          />
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

export default EmojiPicker
