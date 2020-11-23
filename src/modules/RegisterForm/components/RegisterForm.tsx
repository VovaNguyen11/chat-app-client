import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {FormikProps} from "formik"
import {Form, Input, FormItem} from "formik-antd"

import {Button, Block} from "components"

import {IRegistrationFormValues} from "../../types"

import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons"

const RegisterForm = (props: FormikProps<IRegistrationFormValues>) => {
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    isSubmitting,
  } = props
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (isValid && isSubmitting) {
      setSuccess(true)
    }
  }, [isValid, isSubmitting])

  return (
    <Block>
      {!success ? (
        <>
          <div className="auth__top">
            <h2>Sign Up</h2>
            <p>Please register, to use chat</p>
          </div>
          <Form onFinish={handleSubmit}>
            <FormItem
              name="email"
              showValidateSuccess
              showInitialErrorAfterTouched
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                name="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                size="large"
              />
            </FormItem>
            <FormItem name="fullName" showValidateSuccess>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                value={values.fullName}
                onBlur={handleBlur}
                autoComplete="off"
                size="large"
              />
            </FormItem>
            <FormItem name="password" showValidateSuccess>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                size="large"
              />
            </FormItem>
            <FormItem name="passwordConfirm" showValidateSuccess>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                name="passwordConfirm"
                type="password"
                placeholder="Password confirm"
                onChange={handleChange}
                value={values.passwordConfirm}
                onBlur={handleBlur}
                size="large"
              />
            </FormItem>

            <Button size="large" type="primary" htmlType="submit">
              Register now
            </Button>
            <Link to="/auth/signin" className="auth__register-link">
              Sign In
            </Link>
          </Form>
        </>
      ) : (
        <div className="auth__success-block">
          <div>
            <InfoCircleTwoTone />
          </div>
          <h3>Verify Your Email</h3>
          <p>Please check your email and confirm your email address</p>
          <Link to="/">Return to home page</Link>
        </div>
      )}
    </Block>
  )
}

export default RegisterForm
