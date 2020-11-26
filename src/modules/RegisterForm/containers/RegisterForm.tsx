import {withFormik} from "formik"
import {RouteComponentProps, withRouter} from "react-router-dom"

import {IRegistrationFormValues} from "types"
import {userApi} from "services/api"
import {formValidate} from "utils/helpers"

import RegisterForm from "../components/RegisterForm"

const RegisterFormContainer = withFormik<
  RouteComponentProps<any>,
  IRegistrationFormValues
>({
  mapPropsToValues: () => ({
    email: "",
    fullName: "",
    password: "",
    passwordConfirm: "",
  }),
  validate: (values: IRegistrationFormValues) => {
    return formValidate(values)
  },
  handleSubmit: async (
    values: IRegistrationFormValues,
    {setSubmitting, setFieldError, props}
  ) => {
    try {
      await userApi.signUp(values)
      props.history.push("/signup/verify")
    } catch ({response}) {
      if (response.data.errors.email) {
        setFieldError("email", response.data.errors.email.msg)
      }
    } finally {
      setSubmitting(false)
    }
  },
  displayName: "Register Form",
})(RegisterForm)

export default withRouter(RegisterFormContainer)
