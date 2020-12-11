import {IRegistrationFormValues, IFormErrors} from "types"

const validate = ({
  email,
  fullName,
  password,
  passwordConfirm,
}: IRegistrationFormValues) => {
  const errors: IFormErrors = {}

  if (!email) {
    errors.email = "Email required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Invalid email address"
  }
  if (!fullName) errors.fullName = "Name required"
  if (!password) errors.password = "Password required"
  if (password.length < 6) errors.password = "Password too short"
  if (!passwordConfirm) errors.passwordConfirm = "Password required"
  if (passwordConfirm.length < 6) errors.passwordConfirm = "Password too short"
  if (passwordConfirm !== password)
    errors.passwordConfirm = "Passwords don't match"

  return errors
}

export default validate
