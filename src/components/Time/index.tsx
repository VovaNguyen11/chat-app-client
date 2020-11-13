import React from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

import "./Time.scss"

interface DateProps {
  date: string
}

const Time = ({date}: DateProps) => {
  return (
    <span className="date">
      {formatDistanceToNow(new Date(date), {addSuffix: true})}
    </span>
  )
}

export default Time
