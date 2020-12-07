import {isToday, format, isThisYear, isThisWeek} from "date-fns"

const getMessageTime = (createdAt: Date) => {
  if (isToday(createdAt)) {
    return format(createdAt, "HH:mm")
  } else if (isThisWeek(createdAt, {weekStartsOn: 1})) {
    return format(createdAt, "eee")
  } else if (isThisYear(createdAt)) {
    return format(createdAt, "dd.MM")
  } else {
    return format(createdAt, "dd.MM.yyyy")
  }
}

export default getMessageTime
