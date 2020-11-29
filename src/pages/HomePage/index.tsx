import React, {useEffect, memo} from "react"
import {useLocation} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {RootState} from "store/reducers"
import {setCurrentDialogAction} from "store/actions/dialogs"

import {Empty} from "antd"
import {SideBar, MessagesHistory} from "components"

import "./HomePage.scss"

const HomePage = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const {currentDialogId} = useSelector(({dialogs}: RootState) => ({
    currentDialogId: dialogs.currentDialogId,
  }))

  useEffect(() => {
    if (location.pathname.split("/")[1] === "dialogs") {
      dispatch(setCurrentDialogAction(location.pathname.split("/").pop()))
    } else {
      dispatch(setCurrentDialogAction(""))
    }
  }, [location, dispatch])

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
