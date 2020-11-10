import React from "react"
import uncheckedIcon from "assets/img/icon-message-unread.svg"
import checkedIcon from "assets/img/icon-message-read.svg"

interface IconCkeckedProps {
  isChecked?: boolean
}

const Date = ({isChecked}: IconCkeckedProps) => {
  return (
    <img src={isChecked ? checkedIcon : uncheckedIcon} alt="Checked icon" />
  )
}

export default Date 
