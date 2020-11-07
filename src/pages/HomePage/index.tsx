import React from "react"
import {Message} from "components"
import "./HomePage.scss"

const HomePage = () => (
  <section className="home">
    <h1>Home Page</h1>
    <Message
      avatarUrl="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
      text="Hi there. How was your day?"
      date={new Date(2020, 10, 6, 17)}
      attachments={[
        {
          fileName: "image",
          url: "https://source.unsplash.com/100x100/?water",
        },
        {
          fileName: "image",
          url: "https://source.unsplash.com/100x100/?city",
        },
        {
          fileName: "image",
          url: "https://source.unsplash.com/100x100/?nature",
        },
      ]}
    />
    <Message
      avatarUrl="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
      text="Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? "
      date={new Date(2020, 10, 6, 17, 4)}
      isMe
    />
  </section>
)

export default HomePage
