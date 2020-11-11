import {withFormik} from "formik"
import RegisterForm from "../components/RegisterForm"
import {IFormValues} from "modules/types"

import {formValidate} from "utils/helpers"

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    fullName: "",
    password: "",
    passwordConfirm: "",
  }),
  validate: (values: IFormValues) => {
    return formValidate(values)
  },
  handleSubmit: (values: IFormValues, {resetForm, setSubmitting}) => {
    setSubmitting(false)
    resetForm()
  },
  displayName: "Register Form",
})(RegisterForm)
