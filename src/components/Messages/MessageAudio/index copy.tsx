import React, {useEffect, useRef, useState} from "react"

import {convertAudioTime} from "utils/helpers"

import IconWave from "assets/img/icon-wave.svg"
import IconPlay from "assets/img/icon-play.svg"
import IconPause from "assets/img/icon-pause.svg"
import "./MessageAudio.scss"

interface MessageAudioProps {
  audioSrc: string
}

var getDuration = function (url: string, next: any) {
  var _player = new Audio(url)
  _player.addEventListener("durationchange", function (e) {
    if (this.duration !== Infinity) {
      var duration = this.duration
      _player.remove()
      next(duration)
    }
  })
}

const MessageAudio = ({audioSrc}: MessageAudioProps) => {
  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audioElem = audioRef.current
    audioElem.addEventListener("ended", () => {
      setIsPlaying(false)
      setProgress(0)
      setCurrentTime(audioElem.duration)
    })
  }, [])

  const togglePlay = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(prevState => !prevState)
  }
  const handleTimeUpdate = async () => {
    setCurrentTime(audioRef.current.currentTime)
    setProgress(((audioRef.current.currentTime + 0.25) / duration) * 100)
  }

  useEffect(() => {
    getDuration(audioSrc, (duration: any) => {
      setCurrentTime(duration)
      setDuration(duration)
    })
    console.log(duration)
  }, [audioSrc, duration])

  return (
    <div className="audio">
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
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
