import {withFormik} from "formik"
import RegisterForm from "../components/RegisterForm"
import {IRegistrationFormValues} from "modules/types"

import {formValidate} from "utils/helpers"

const RegisterFormContainer = withFormik({
  mapPropsToValues: () => ({
    email: "",
    fullName: "",
    password: "",
    passwordConfirm: "",
  }),
  validate: (values: IRegistrationFormValues) => {
    return formValidate(values)
  },
  handleSubmit: (
    values: IRegistrationFormValues,
    {resetForm, setSubmitting}
  ) => {
    console.log(values)

    setSubmitting(false)
    resetForm()
  },
  displayName: "Register Form",
})(RegisterForm)

export default RegisterFormContainer
