import {withFormik} from "formik"
import {connect, ConnectedProps} from "react-redux"
import {RouteComponentProps, withRouter} from "react-router-dom"

import LoginForm from "../components/LoginForm"

import {ILoginFormValues} from "modules/types"
import {fetchUserLoginAction} from "store/actions/user"

interface LoginFormContainerProps
  extends RouteComponentProps<any>,
    PropsFromRedux {}

const LoginFormContainer = withFormik<
  LoginFormContainerProps,
  ILoginFormValues
>({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),

  handleSubmit: async (
    values: ILoginFormValues,
    {setSubmitting, setFieldValue, setStatus, props}
  ) => {
    try {
      await props.fetchUserLoginAction(values)
      setStatus()
    } catch (error) {
      setStatus({error: error.response.data.message})
    } finally {
      setSubmitting(false)
      setFieldValue("password", "")
    }
  },
  displayName: "LoginForm",
})(LoginForm)

const connector = connect(null, {fetchUserLoginAction})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(withRouter(LoginFormContainer))
