import React from "react"
import {IUser} from "types/user"

import "./Avatar.scss"

interface AvatarProps {
  user: IUser
}

const Avatar = ({user}: AvatarProps) => (
  <>
    <img
      className="avatar"
      src={user.avatarSrc}
      alt={`${user.fullName} avatar`}
    />
  </>
)

export default Avatar
