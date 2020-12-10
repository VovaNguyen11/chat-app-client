import React, {useEffect} from "react"
import {Route, Switch, Redirect} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"

import {HomePage, AuthPage} from "./pages"

import {RootState} from "store/reducers"

import {getUserDataAction} from "store/actions/user"

const App = () => {
  const {isAuth} = useSelector(({user}: RootState) => ({
    isAuth: user.isAuth,
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDataAction())
  }, [dispatch])

  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={["/", "/im", "/dialogs/:id"]}>
          {isAuth ? <HomePage /> : <Redirect to="/signin" />}
        </Route>
        <Route path={["/signin", "/signup"]}>
          {isAuth ? <Redirect to="/im" /> : <AuthPage />}
        </Route>
      </Switch>
    </div>
  )
}

export default App
