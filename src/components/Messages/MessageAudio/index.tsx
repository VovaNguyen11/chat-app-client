import React, {useRef, useState} from "react"

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

  const togglePlay = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(prevState => !prevState)
  }

  const handleLoadMetaData = async () => {
    while (audioRef.current && audioRef.current.duration === Infinity) {
      await new Promise(r => setTimeout(r, 1000))
      if (audioRef.current) {
        audioRef.current.currentTime = 10000000 * Math.random()
      }
    }
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }

  const handleTimeUpdate = () => {
    const duration = audioRef.current.duration
    setCurrentTime(audioRef.current.currentTime)
    setProgress(((audioRef.current.currentTime + 0.25) / duration) * 100)
    if (audioRef.current.currentTime === 0) {
      setProgress(0)
      setCurrentTime(duration)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime(audioRef.current.duration)
  }

  return (
    <div className="audio">
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        onLoadedMetadataCapture={handleLoadMetaData}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
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
