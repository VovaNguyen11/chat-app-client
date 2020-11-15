import React from "react"
import {Route, Switch} from "react-router-dom"

import {HomePage, AuthPage} from "./pages"

const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={["/", "/dialogs/:id"]}>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
