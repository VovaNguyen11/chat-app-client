import {withFormik} from "formik"
import {connect, ConnectedProps} from "react-redux"
import {RouteComponentProps, withRouter} from "react-router-dom"

import LoginForm from "../components/LoginForm"

import {ILoginFormValues} from "types"
import {userLoginAction, getUserDataAction} from "store/actions/user"
import {RootState} from "store/reducers"

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
      await props.userLoginAction(values)
      const user = await props.getUserDataAction()
      // setStatus()
      // setSubmitting(false)

      if (user?.confirmed) {
        props.history.push("/im")
      } else {
        props.history.push("/signup/verify")
      }
    } catch (error) {
      setSubmitting(false)
      setStatus({error: error.response.data.message})
    }
  },
  displayName: "LoginForm",
})(LoginForm)

const connector = connect(({user}: RootState) => ({user: user.data}), {
  userLoginAction,
  getUserDataAction,
})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(withRouter(LoginFormContainer))
