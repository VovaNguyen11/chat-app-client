import React from "react"
import {IUser} from "types/user"

import {generateAvatarFromHash} from "utils/helpers"

import "./Avatar.scss"

interface AvatarProps {
  user: IUser
}

const Avatar = ({user}: AvatarProps) => {
  if (user.avatarSrc) {
    return (
      <img
        className="avatar"
        src={user.avatarSrc}
        alt={`${user.fullName} avatar`}
      />
    )
  } else {
    const {color, colorLighten} = generateAvatarFromHash(user._id)
    const firstChar = user.fullName[0].toUpperCase()
    return (
      <div
        className="avatar avatar--symbol"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
      >
        {firstChar}
      </div>
    )
  }
}

export default Avatar
