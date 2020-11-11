const convertAudioTime = (value: number) => {
  const mins = Math.floor(value / 60)
  const secs = Number((value % 60).toFixed())
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`
}

export default convertAudioTime
