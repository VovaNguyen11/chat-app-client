import React from "react"
import {Link} from "react-router-dom"

import {FormikProps} from "formik"
import {Form, Input, FormItem} from "formik-antd"
import {MailOutlined, LockOutlined, UserOutlined} from "@ant-design/icons"

import {Button, Block} from "components"

import {IRegistrationFormValues} from "types"

const RegisterForm = (props: FormikProps<IRegistrationFormValues>) => {
  const {values, handleSubmit, handleChange, handleBlur, isSubmitting} = props

  return (
    <Block>
      <div className="auth__top">
        <h2>Sign Up</h2>
        <p>Please register, to use chat</p>
      </div>
      <Form onFinish={handleSubmit}>
        <FormItem name="email" showValidateSuccess showInitialErrorAfterTouched>
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

        <Button
          size="large"
          type="primary"
          htmlType="submit"
          disabled={isSubmitting}
        >
          Register now
        </Button>
        <Link to="/signin" className="auth__register-link">
          Sign In
        </Link>
      </Form>
    </Block>
  )
}

export default RegisterForm
