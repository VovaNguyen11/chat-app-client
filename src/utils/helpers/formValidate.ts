import {IFormValues, IFormErrors} from "modules/types"

// interface ValidateProps {
//   isLogin: boolean
//   values: IFormValues
// }

// interface validateRules {
//   email: (value: string) => void
//   fullName: (value: string) => void
//   password: (value: string) => void
//   passwordConfirm: (value: string) => void
// }

const validate = ({
  email,
  fullName,
  password,
  passwordConfirm,
}: IFormValues) => {
  const errors: IFormErrors = {}

  if (!email) {
    errors.email = "Email required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Invalid email address"
  }
  if (!fullName) errors.fullName = "Name required"
  if (!password) errors.password = "Password required"
  if (!passwordConfirm) errors.passwordConfirm = "Password required"
  if (passwordConfirm !== password)
    errors.passwordConfirm = "Passwords don't match"

  return errors
}

export default validate
