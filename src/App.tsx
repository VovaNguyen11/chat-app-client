import React from "react"
import {Route, Switch, Redirect} from "react-router-dom"
import {useSelector} from "react-redux"

import {HomePage, AuthPage} from "./pages"

import {RootState} from "store/reducers"

const App = () => {
  const isAuth = useSelector(({user}: RootState) => user.isAuth)
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={["/im", "/dialogs/:id"]}>
          {isAuth ? <HomePage /> : <Redirect to="/auth" />}
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Redirect to="/im" />
      </Switch>
    </div>
  )
}

export default App
