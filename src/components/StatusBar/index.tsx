import React from "react"

import {Button} from "components"
import {EllipsisOutlined} from "@ant-design/icons"
import {IUser} from "types"

import "./StatusBar.scss"

interface StatusBarProps {
  partner: IUser | undefined
}

const StatusBar = ({partner}: StatusBarProps) => {
  return (
    <div className="status-bar">
      <div className="status-bar__content">
        <h3>{partner?.fullName}</h3>
        <span
          className={partner?.isOnline ? "status status--online" : "status"}
        >
          {partner?.isOnline ? "online" : "offline"}
        </span>
      </div>
      <Button
        onClick={() => console.log("Status Bar options")}
        type="link"
        shape="circle"
        icon={<EllipsisOutlined />}
      />
    </div>
  )
}

export default StatusBar
