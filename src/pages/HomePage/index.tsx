import React from "react"
import {useSelector} from "react-redux"
import {RootState} from "store/reducers"

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
        {currentDialogId && <MessagesHistory />}
      </div>
    </section>
  )
}

export default HomePage
