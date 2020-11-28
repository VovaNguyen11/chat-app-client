import React from "react"
import {useSelector} from "react-redux"
import {RootState} from "store/reducers"

import {Empty} from "antd"
import {SideBar, MessagesHistory} from "components"

import "./HomePage.scss"

const HomePage = () => {
  const {currentDialogId} = useSelector(({dialogs}: RootState) => ({
    currentDialogId: dialogs.currentDialogId,
  }))

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

export default HomePage
