import React, {useState} from "react"
import {Link} from "react-router-dom"
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons"

import {Form, Input} from "antd"
import {Button, Block} from "components"

const LoginForm = () => {
  const [form] = Form.useForm()
  const [success, setSuccess] = useState(false)

  return (
    <Block>
      {!success ? (
        <>
          <div className="auth__top">
            <h2>Sign Up</h2>
            <p>Please register, to use chat</p>
          </div>
          <Form form={form} name="form__signup">
            <Form.Item name="email">
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                id="email"
                placeholder="E-mail"
                size="large"
              />
            </Form.Item>
            <Form.Item name="username">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                id="name"
                placeholder="Full Name"
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
            <Form.Item name="passwordConfirm">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                id="passwordConfirm"
                type="password"
                placeholder="Password confirm"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary">
                Register now
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/auth/signin" className="auth__register-link">
                Sign In
              </Link>
            </Form.Item>
          </Form>
        </>
      ) : (
        <div className="auth__success-block">
          <div>
            <InfoCircleTwoTone />
          </div>
          <h3>Verify Your Email</h3>
          <p>Please check your email and confirm your email address</p>
        </div>
      )}
    </Block>
  )
}

export default LoginForm
