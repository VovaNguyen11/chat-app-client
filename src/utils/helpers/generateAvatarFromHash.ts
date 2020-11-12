import tinycolor from "tinycolor2"

const getCorrectIndex = (value: number) =>
  value > 255 ? 255 : value < 0 ? 0 : value

const generateAvatarFromHash = (hash: string | undefined) => {
  console.log(hash)

  const [r, g, b] = hash
    ?.substr(10, 13)
    .split("")
    .map(char => getCorrectIndex(char.charCodeAt(0)))

  console.log(r, g, b)

  return {
    color: tinycolor({r, g, b}).lighten(10).saturate(10).toHexString(),
    colorLighten: tinycolor({r, g, b}).lighten(55).saturate(55).toHexString(),
  }
}

export default generateAvatarFromHash
