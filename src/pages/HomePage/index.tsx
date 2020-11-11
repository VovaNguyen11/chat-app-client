import React from "react"
import {Message, SideBar} from "components"
import "./HomePage.scss"

const HomePage = () => (
  <section className="home">
    <div className="chat">
      <SideBar />
    </div>
    {/* <Message
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
    /> */}
    {/* <Message
      user={{
        avatarSrc:
          "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
        fullName: "John Achtenberg",
      }}
      text="Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? Im good, and you? "
      date={new Date(2020, 10, 6, 17, 4)}
      isMe
      isChecked
    /> */}
    {/* <Message
      avatarUrl="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
      isTyping
    /> */}
    {/* <Message
      user={{
        fullName: "Elon Musk",
        avatarSrc:
          "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
      }}
      date={new Date(2020, 10, 7, 18)}
      attachments={[
        {
          _id: "1",
          fileName: "image",
          url: "https://freesound.org/data/previews/542/542450_5674468-lq.mp3",
          ext: "webm",
        },
      ]}
    />
    <Message
      user={{
        fullName: "Elon Musk",
        avatarSrc:
          "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
      }}
      date={new Date(2020, 10, 7, 18)}
      attachments={[
        {
          _id: "1",
          fileName: "image",
          url: "https://freesound.org/data/previews/33/33837_215874-lq.mp3",
          ext: "webm",
        },
      ]}
    />
    <Message
      user={{
        _id: "k2pf030240811eb9168931778d09dbc",
        fullName: "Elon Musk",
      }}
      text="helllo"
      date={new Date(2020, 10, 7, 18)}
    />
    <Message
      user={{
        _id: "54e1c50a60415320c05c8050ef91189d",
        fullName: "Vova Nguyen",
      }}
      text="Im good"
      date={new Date(2020, 10, 7, 18)}
    /> */}
  </section>
)

export default HomePage
