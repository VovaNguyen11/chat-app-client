import React from "react"
import {attachmentsApi} from "services/api"

import {RcFile} from "antd/lib/upload/interface"
import {Button} from "components"
import {AudioOutlined} from "@ant-design/icons"
interface AudioRecorderProps {
  setMediaRecorder: React.Dispatch<
    React.SetStateAction<MediaRecorder | undefined>
  >
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>
  handleSendAudio: (audioFile: RcFile) => Promise<any>
  setAudioLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const AudioRecorder = ({
  setMediaRecorder,
  setIsRecording,
  handleSendAudio,
  setAudioLoading,
}: AudioRecorderProps) => {
  const handleRecordingAudio = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true})
    const audioRecorder = new MediaRecorder(stream)
    setMediaRecorder(audioRecorder)
    audioRecorder.start()

    audioRecorder.onstart = () => setIsRecording(true)
    audioRecorder.onstop = () => setIsRecording(false)

    audioRecorder.ondataavailable = async e => {
      setAudioLoading(true)
      const res = await attachmentsApi.upload(e.data)
      handleSendAudio(res)
      setAudioLoading(false)
      audioRecorder.stream.getTracks().forEach(track => {
        track.stop()
      })
    }
  }

  return (
    <div>
      <Button
        onClick={handleRecordingAudio}
        type="link"
        size="large"
        shape="circle"
        icon={<AudioOutlined />}
      />
    </div>
  )
}

export default AudioRecorder
