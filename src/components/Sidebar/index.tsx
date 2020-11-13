import React from "react"

import {TeamOutlined, FormOutlined} from "@ant-design/icons"

import {Button} from "components"
import DialogsList from "containers/DialogsList"

import "./Sidebar.scss"

import {dialogs} from "dialogs.js"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <TeamOutlined />
        <span>Dialogs List</span>
        <Button
          onClick={() => console.log("Sidebar new dialog")}
          type="link"
          shape="circle"
          icon={<FormOutlined />}
        />
      </div>

      <div className="sidebar__dialogs">
        <DialogsList dialogs={dialogs} />
      </div>
    </div>
  )
}

export default Sidebar
