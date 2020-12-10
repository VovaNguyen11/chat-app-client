import React, {useEffect, memo} from "react"
import {useLocation, useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {RootState} from "store/reducers"
import {setCurrentDialogAction} from "store/actions/dialogs"

import {Empty} from "antd"
import {SideBar, MessagesHistory} from "components"

import "./HomePage.scss"

const HomePage = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const {currentDialogId, isAuth} = useSelector(
    ({dialogs, user}: RootState) => ({
      currentDialogId: dialogs.currentDialogId,
      isAuth: user.isAuth,
    })
  )

  useEffect(() => {
    if (location.pathname.split("/")[1] === "dialogs") {
      dispatch(setCurrentDialogAction(location.pathname.split("/").pop()))
    } else {
      dispatch(setCurrentDialogAction(""))
    }
  }, [location, dispatch])

  useEffect(() => {
    if (!isAuth) {
      history.push("/signup/verify")
    }
  }, [isAuth, history])

  return (
    <section className="home">
      <div className="chat">
        <SideBar />
        {currentDialogId ? (
          <MessagesHistory />
        ) : (
          <Empty description="Select a dialog to start messaging" />
        )}
      </div>
    </section>
  )
}

export default memo(HomePage)
