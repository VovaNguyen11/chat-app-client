import React, {useState} from "react"
import {userApi, dialogsApi} from "services/api"

import {Modal, Form, Select, Input} from "antd"
import {Button} from "components"

import {IUser} from "types"

import {FormOutlined} from "@ant-design/icons"

const AddFormModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState<IUser[]>([])
  const [selectedUserId, setSelectedUserId] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [messageText, setMessageText] = useState("")

  const options = users.map(user => (
    <Select.Option value={user._id} key={user._id}>
      {user.fullName}
    </Select.Option>
  ))

  const onCloseModal = () => {
    setIsVisible(false)
    setSearchValue("")
    setSelectedUserId("")
    setMessageText("")
    setUsers([])
  }
  const onOpenModal = () => setIsVisible(true)

  const onSearchValueChange = (value: string) => setSearchValue(value)

  const onSelectUser = (value: string) => setSelectedUserId(value)
  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessageText(e.target.value)

  const onModalOk = () => {
    setIsLoading(true)
    dialogsApi
      .addDialog(selectedUserId, messageText)
      .then(() => onCloseModal())
      .finally(() => setIsLoading(false))
  }

  const onSearchUsers = async (searchValue: string) => {
    if (searchValue) {
      setIsLoading(true)
      const data = await userApi.findUsers(searchValue)
      setUsers(data)
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button
        onClick={onOpenModal}
        type="link"
        shape="circle"
        icon={<FormOutlined />}
      />
      <Modal
        title="New Dialog"
        visible={isVisible}
        onOk={onCloseModal}
        onCancel={onCloseModal}
        footer={[
          <Button key="back" onClick={onCloseModal}>
            Закрыть
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={onModalOk}
            loading={isLoading}
            disabled={!messageText}
          >
            Создать
          </Button>,
        ]}
      >
        <Form>
          <Form.Item label="Search">
            <Select
              value={searchValue}
              onSearch={onSearchUsers}
              onChange={onSearchValueChange}
              onSelect={onSelectUser}
              notFoundContent={null}
              style={{width: "100%"}}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              placeholder="Enter user name or e-mail"
              showSearch
            >
              {options}
            </Select>
          </Form.Item>
          {selectedUserId && (
            <Form.Item label="Type Message">
              <Input.TextArea
                autoSize={{minRows: 3, maxRows: 10}}
                onChange={onMessageChange}
                value={messageText}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </>
  )
}

export default AddFormModal
