import React from "react"
import {Route, Switch} from "react-router-dom"

import {LoginForm, RegisterForm} from "modules"
import VerifyEmail from "./components/VerifyEmail"
import "./AuthPage.scss"

const AuthPage = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Switch>
          <Route path="/signin">
            <LoginForm />
          </Route>
          <Route exact path="/signup">
            <RegisterForm />
          </Route>
          <Route path="/signup/verify">
            <VerifyEmail />
          </Route>
        </Switch>
      </div>
    </section>
  )
}
export default AuthPage
