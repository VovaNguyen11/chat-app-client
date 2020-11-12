import React from "react"
import {SideBar, MessagesHistory} from "components"

import "./HomePage.scss"

const HomePage = () => (
  <section className="home">
    <div className="chat">
      <SideBar />
      <MessagesHistory />
    </div>
  </section>
)

export default HomePage
