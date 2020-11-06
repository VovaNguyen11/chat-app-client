import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"

import {LoginForm, RegisterForm} from "modules"

import "./AuthPage.scss"

const AuthPage = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Switch>
          <Route path="/auth/signin">
            <LoginForm />
          </Route>
          <Route path="/auth/signup">
            <RegisterForm />
          </Route>
          <Route path="*">
            <Redirect to="/auth/signin" />
          </Route>
        </Switch>
      </div>
    </section>
  )
}
export default AuthPage
