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
              _id: "5fad0e076babc920ab5585f1",
              message: {
                text:
                  "Eiusmod sint minim id ipsum laboris nulla eu elit officia sint id irure mollit sint.",
                createdAt: "Thu Nov 02 2006 01:34:32 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Monroe Bradshaw",
                _id: "5fad0e07087346af61205600",
                isOnline: false,
              },
              isMe: false,
              isChecked: true,
            },
            {
              _id: "5fad0e074dd4520ccaabc941",
              message: {
                text: "Nisi velit fugiat do aliquip.",
                createdAt: "Fri Aug 08 2008 22:40:54 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Jewel Barron",
                _id: "5fad0e07b8b5ad665c66ad1f",
                isOnline: false,
              },
              isMe: false,
              isChecked: true,
            },
            {
              _id: "5fad0e07072b466c35285301",
              message: {
                text:
                  "Qui dolore excepteur nulla officia consequat cupidatat consequat fugiat cupidatat elit sit.",
                createdAt: "Fri Jul 13 2018 23:35:15 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Wilma Parks",
                _id: "5fad0e0764fe882618149065",
                isOnline: true,
              },
              isMe: false,
              isChecked: false,
            },
            {
              _id: "5fad0e077709ac870bdb0b82",
              message: {
                text:
                  "Exercitation exercitation exercitation id aliqua sint eiusmod exercitation amet culpa id esse reprehenderit ex.",
                createdAt: "Fri Aug 31 2001 21:34:18 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Mathis Cummings",
                _id: "5fad0e07b68d23ac7198d17b",
                isOnline: true,
              },
              isMe: false,
              isChecked: false,
            },
            {
              _id: "5fad0e07630eaaf221519375",
              message: {
                text:
                  "Quis eiusmod duis qui nostrud duis ex laborum deserunt voluptate ea laborum velit.",
                createdAt: "Sat Jan 16 2010 00:27:00 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Wilkins Randolph",
                _id: "5fad0e07afe48e253e1cabc6",
                isOnline: false,
              },
              isMe: true,
              isChecked: true,
            },
            {
              _id: "5fad0e07f19a911d0ee71a62",
              message: {
                text:
                  "Aliquip ipsum tempor laboris nostrud commodo incididunt veniam minim adipisicing quis duis nostrud dolor officia.",
                createdAt: "Sun Aug 16 2015 16:39:56 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Letitia Bond",
                _id: "5fad0e07a72f1be1389d1846",
                isOnline: false,
              },
              isMe: false,
              isChecked: false,
            },
            {
              _id: "5fad0e0710d2add0834df485",
              message: {
                text: "Qui do in magna pariatur commodo eiusmod.",
                createdAt: "Tue Mar 29 2016 06:36:41 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Bryan Hamilton",
                _id: "5fad0e074c88016d1fb55997",
                isOnline: false,
              },
              isMe: false,
              isChecked: true,
            },
            {
              _id: "5fad0e07fe0684d4f73d40f8",
              message: {
                text:
                  "Minim cillum excepteur aliquip occaecat ex nostrud id et veniam id.",
                createdAt: "Mon Feb 02 2009 03:36:30 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Weaver Fowler",
                _id: "5fad0e0793b6615f6af6edd9",
                isOnline: false,
              },
              isMe: false,
              isChecked: true,
            },
            {
              _id: "5fad0e07b3c37e8c3ff1ea3a",
              message: {
                text: "Sunt voluptate aliquip cillum dolore esse aliqua.",
                createdAt: "Sat Mar 04 2017 22:33:17 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Maryann Mcmillan",
                _id: "5fad0e07e8d177df56762b5e",
                isOnline: true,
              },
              isMe: false,
              isChecked: true,
            },
            {
              _id: "5fad0e0733a7e366bb4093c8",
              message: {
                text: "Id id duis sunt labore nulla non deserunt nostrud.",
                createdAt: "Mon Sep 25 2000 22:27:09 GMT+0000 (UTC)",
              },
              partner: {
                fullName: "Shari Sheppard",
                _id: "5fad0e077f3a2c3d7da9d174",
                isOnline: true,
              },
              isMe: true,
              isChecked: false,
            },
          ]}
        />
      </div>
    </div>
  )
}

export default Sidebar
