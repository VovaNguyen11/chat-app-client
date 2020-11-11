import React from "react"
import {Input} from "antd"
import {TeamOutlined, FormOutlined} from "@ant-design/icons"

import {DialogsList} from "components"

import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <TeamOutlined />
        <span>Dialogs List</span>
        <FormOutlined />
      </div>
      <div className="sidebar__search-input">
        <Input.Search
          placeholder="Search by users"
          onSearch={value => console.log(value)}
        ></Input.Search>
      </div>
      <div className="sidebar__dialogs">
        <DialogsList
          dialogs={[
            {
              _id: Math.random(),
              partner: {
                fullName: "Vova Nguyen",
                avatarSrc:
                  "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
                isOnline: true,
              },
              isMe: true,
              isChecked: true,
              message: {
                text: "Hi. How Are you Today. Seems liek you fine",
                createdAt: new Date(2020, 10, 10, 11),
              },
            },
            {
              _id: Math.random(),
              partner: {
                fullName: "Vova Nguyen",
                avatarSrc:
                  "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
                isOnline: false,
              },
              isMe: true,
              isChecked: false,
              message: {
                text: "Hi. How Are ",
                createdAt: new Date(2020, 10, 1),
              },
            },
            {
              _id: Math.random(),
              partner: {
                fullName: "Vova Nguyen",
                avatarSrc:
                  "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
                isOnline: true,
              },
              isMe: false,
              isChecked: true,
              message: {
                text: "Hi. How Are you Today. Seems liek you fine",
                createdAt: new Date(2020, 2, 20),
              },
            },
            {
              _id: Math.random(),
              partner: {
                fullName: "Vova Nguyen NGuyen ",
                avatarSrc:
                  "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
                isOnline: false,
              },
              isMe: false,
              isChecked: true,
              message: {
                text: "Hi. How Are ",
                createdAt: new Date(2020, 9, 2),
              },
            },
          ]}
        />
      </div>
    </div>
  )
}

export default Sidebar
