import React from "react"
import {Message, DialogList} from "components"
import "./HomePage.scss"

const HomePage = () => (
  <section className="home">
    <h1>Home Page</h1>

    {/* <DialogList
      dialogs={[
        {
          _id: Math.random(),
          partner: {
            fullName: "Vova Nguyen",
            avatarSrc:
              "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
            isOnline: true,
          },
          isMe: true,
          isChecked: true,
          message: {
            text: "Hi. How Are you Today. Seems liek you fine",
            createdAt: new Date(2020, 10, 10, 11),
          },
        },
        {
          _id: Math.random(),
          partner: {
            fullName: "Vova Nguyen",
            avatarSrc:
              "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
            isOnline: false,
          },
          isMe: true,
          isChecked: false,
          message: {
            text: "Hi. How Are ",
            createdAt: new Date(2020, 10, 1),
          },
        },
        {
          _id: Math.random(),
          partner: {
            fullName: "Vova Nguyen",
            avatarSrc:
              "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
            isOnline: true,
          },
          isMe: false,
          isChecked: true,
          message: {
            text: "Hi. How Are you Today. Seems liek you fine",
            createdAt: new Date(2020, 2, 20),
          },
        },
        {
          _id: Math.random(),
          partner: {
            fullName: "Vova Nguyen NGuyen ",
            avatarSrc:
              "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
            isOnline: false,
          },
          isMe: false,
          isChecked: true,
          message: {
            text: "Hi. How Are ",
            createdAt: new Date(2020, 9, 2),
          },
        },
      ]}
    /> */}

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
    />
    <Message
      avatarUrl="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
      date={new Date(2020, 10, 7, 18)}
      attachments={[
        {
          fileName: "image",
          url: "https://source.unsplash.com/100x100/?water",
        },
      ]}
    />  */}
  </section>
)

export default HomePage
