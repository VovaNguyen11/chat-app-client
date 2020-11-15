import React, {useState} from "react"

import Input from "antd/lib/input"
import {TeamOutlined, FormOutlined} from "@ant-design/icons"

import {Button} from "components"
import {DialogsList} from "containers"

import "./Sidebar.scss"

const Sidebar = () => {
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

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
      <div className="sidebar__search-input">
        <Input.Search placeholder="Search by users" onChange={handleSearch} />
      </div>
      <div className="sidebar__dialogs">
        <DialogsList searchValue={searchValue} />
      </div>
    </div>
  )
}

export default Sidebar
