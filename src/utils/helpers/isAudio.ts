import {IAttachment} from "types/attachments"

const isAudio = (attachments: Array<IAttachment>) => {
  return attachments.length && attachments[0].ext === "webm"
}

export default isAudio
