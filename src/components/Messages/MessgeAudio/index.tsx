import React, {useEffect, useRef, useState, useCallback} from "react"

import {convertAudioTime} from "utils/helpers"

import IconWave from "assets/img/icon-wave.svg"
import IconPlay from "assets/img/icon-play.svg"
import IconPause from "assets/img/icon-pause.svg"
import "./MessageAudio.scss"

interface MessageAudioProps {
  audioSrc: string
}

const MessageAudio = ({audioSrc}: MessageAudioProps) => {
  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const getProgressWidth = useCallback(() => {
    const duration = audioRef.current.duration
    setCurrentTime(audioRef.current.currentTime)
    setProgress(((audioRef.current.currentTime + 0.25) / duration) * 100)
  }, [])

  useEffect(() => {
    const audioElem = audioRef.current
    audioElem.addEventListener("ended", () => {
      setIsPlaying(false)
      setProgress(0)
      setCurrentTime(0)
    })

    audioElem.addEventListener("loadedmetadata", () => {
      setCurrentTime(audioElem.duration)
    })

    audioElem.addEventListener("timeupdate", getProgressWidth)

    return () => audioElem.removeEventListener("timeupdate", getProgressWidth)
  }, [getProgressWidth])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(prevState => !prevState)
    } else {
      audioRef.current.play()
      setIsPlaying(prevState => !prevState)
    }
  }

  return (
    <div className="audio">
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <div className="audio__progress" style={{width: progress + "%"}}></div>
      <div className="audio__info">
        <div className="audio__btn" onClick={togglePlay}>
          {isPlaying ? (
            <img
              src={IconPause}
              alt="Pause icon"
              className="audio__btn--pause"
            />
          ) : (
            <img src={IconPlay} alt="Play icon" className="audio__btn--play" />
          )}
        </div>
        <div className="audio__wave">
          <img src={IconWave} alt="Audio wave icon" />
        </div>
        <div className="audio__duration">
          <span className="message__audio-duration">
            {convertAudioTime(currentTime)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MessageAudio
