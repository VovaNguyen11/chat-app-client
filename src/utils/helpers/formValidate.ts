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
  if (!passwordConfirm) errors.passwordConfirm = "Password required"
  if (passwordConfirm !== password)
    errors.passwordConfirm = "Passwords don't match"

  return errors
}

export default validate
