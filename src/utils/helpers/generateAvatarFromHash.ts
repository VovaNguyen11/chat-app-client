import tinycolor from "tinycolor2"

const getCorrectIndex = (value: number) =>
  value > 255 ? 255 : value < 0 ? 0 : value

const generateAvatarFromHash = (hash: string | undefined) => {
  const [r, g, b] = hash
    ?.substr(6, 9)
    .split("")
    .map(char => getCorrectIndex(char.charCodeAt(0)))

  return {
    color: tinycolor({r, g, b})
      .lighten(15)
      .brighten(15)
      .saturate(10)
      .toHexString(),
    colorLighten: tinycolor({r, g, b})
      .brighten(15)
      .lighten(25)
      .saturate(60)
      .toHexString(),
  }
}

export default generateAvatarFromHash
