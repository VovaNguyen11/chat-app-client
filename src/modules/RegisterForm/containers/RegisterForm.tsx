import {withFormik} from "formik"
import RegisterForm from "../components/RegisterForm"
import {IFormValues} from "../components/RegisterForm"

interface IFormErrors {
  email?: string
  fullName?: string
  password?: string
  passwordConfirm?: string
}

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
  if (!passwordConfirm) {
    errors.passwordConfirm = "Password reqiured"
  } else if (password !== passwordConfirm) {
    errors.passwordConfirm = "Passwords don't match"
  }
  return errors
}

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    fullName: "",
    password: "",
    passwordConfirm: "",
  }),
  validate: (values: IFormValues) => {
    return validate(values)
  },
  handleSubmit: ({email}: IFormValues, {resetForm, setSubmitting}) => {
    setSubmitting(false)
    resetForm()
  },
  displayName: "Register Form",
})(RegisterForm)
