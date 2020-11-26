import React, {useEffect} from "react"
import {Link, RouteComponentProps} from "react-router-dom"
import {useSelector} from "react-redux"

import {FormikProps} from "formik"
import {Form, Input, FormItem} from "formik-antd"
import {MailOutlined, LockOutlined} from "@ant-design/icons"

import {Button, Block} from "components"

import {RootState} from "store/reducers"
import {ILoginFormValues} from "types"


interface LoginFormContainerProps
  extends RouteComponentProps<any>,
    FormikProps<ILoginFormValues> {}

const LoginForm = ({
  values,
  handleSubmit,
  handleChange,
  isSubmitting,
  status,
  history,
}: LoginFormContainerProps) => {
  const isAuth = useSelector(({user}: RootState) => user.isAuth)

  useEffect(() => {
    if (isAuth) {
      history.push("/im")
    }
  }, [isAuth, history])

  return (
    <Block>
      <div className="auth__top">
        <h2>Войдите в аккаунт</h2>
        <p>Пожалуйста,войдите в аккаунт</p>
      </div>
      <Form onFinish={handleSubmit}>
        <FormItem name="email">
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            name="email"
            placeholder="E-mail"
            size="large"
            // autoComplete="off"
            value={values.email}
            onChange={handleChange}
          />
        </FormItem>
        <FormItem name="password">
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            name="password"
            type="password"
            placeholder="Password"
            size="large"
            value={values.password}
            onChange={handleChange}
          />
        </FormItem>
        {status?.error && <p style={{color: "red"}}>*{status.error}</p>}

        <Button
          size="large"
          type="primary"
          htmlType="submit"
          disabled={isSubmitting}
        >
          Log in
        </Button>
        <Link to="/signup" className="auth__register-link">
          Sign Up
        </Link>
      </Form>
    </Block>
  )
}

export default LoginForm
