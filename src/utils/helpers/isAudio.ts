import {IAttachment} from "types"

const isAudio = (attachments: Array<IAttachment> | undefined) => {
  return attachments && attachments.length && attachments[0].ext === "webm"
}

export default isAudio
