import React, {useState} from "react"

import Input from "antd/lib/input"
import {TeamOutlined, SearchOutlined} from "@ant-design/icons"

import {DialogsList, AddDialogModal} from "components"

import "./Sidebar.scss"

const Sidebar = () => {
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value)

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <TeamOutlined />
        <span>Dialogs List</span>
        <AddDialogModal />
      </div>
      <div className="sidebar__search-input">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search by users"
          onChange={handleSearch}
        />
      </div>
      <div className="sidebar__dialogs">
        <DialogsList searchValue={searchValue} />
      </div>
    </div>
  )
}

export default Sidebar
