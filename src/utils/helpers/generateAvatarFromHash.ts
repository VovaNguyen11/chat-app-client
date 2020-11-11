import tinycolor from "tinycolor2"

const getCorrectIndex = (value: number) => {
  if (value > 255) {
    return 255
  }
  if (value < 0) {
    return 0
  }
  return value > 255 ? 255 : value < 0 ? 0 : value
}

const generateAvatarFromHash = (hash: string | undefined) => {
  const [r, g, b] = hash
    ?.substr(0, 3)
    .split("")
    .map(char => getCorrectIndex(char.charCodeAt(0)))

  return {
    color: tinycolor({r, g, b}).lighten(10).saturate(10).toHexString(),
    colorLighten: tinycolor({r, g, b}).lighten(55).saturate(55).toHexString(),
  }
}

export default generateAvatarFromHash
