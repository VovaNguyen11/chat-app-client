import React from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

import "./Date.scss"

interface DateProps {
  date: Date
}

const Date = ({date}: DateProps) => {
  return (
    <span className="date">{formatDistanceToNow(date, {addSuffix: true})}</span>
  )
}

export default Date
