import React from "react"
import {Link, useRouteMatch} from "react-router-dom"

import {Form, Input} from "antd"
import {MailOutlined, LockOutlined} from "@ant-design/icons"
import {Button, Block} from "components"

const LoginForm = () => {
  const [form] = Form.useForm()
  const {url} = useRouteMatch()
  return (
    <Block>
      <div className="auth__top">
        <h2>Войдите в аккаунт</h2>
        <p>Пожалуйста,войдите в аккаунт</p>
      </div>
      <Form form={form} name="form__login">
        <Form.Item name="email">
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            id="email"
            placeholder="E-mail"
            size="large"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            id="password"
            type="password"
            placeholder="Password"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary">
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to="/auth/signup" className="auth__register-link">
            Sign Up
          </Link>
        </Form.Item>
      </Form>
    </Block>
  )
}

export default LoginForm
