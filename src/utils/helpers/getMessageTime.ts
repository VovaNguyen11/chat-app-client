import {isToday, format, isThisYear, isThisWeek} from "date-fns"

const getMessageTime = (createdAt: Date) => {
  if (isToday(createdAt)) {
    return format(createdAt, "hh:mm")
  } else if (isThisWeek(createdAt)) {
    return format(createdAt, "eee")
  } else if (isThisYear(createdAt)) {
    return format(createdAt, "d.MM")
  } else {
    return format(createdAt, "dd.MM.yyyy")
  }
}

export default getMessageTime
