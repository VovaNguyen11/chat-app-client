import {withFormik} from "formik"
import {connect, ConnectedProps} from "react-redux"
import {RouteComponentProps, withRouter} from "react-router-dom"

import LoginForm from "../components/LoginForm"

import {ILoginFormValues} from "modules/types"
import {fetchUserDataAction} from "store/actions/user"
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

  handleSubmit: (
    values: ILoginFormValues,
    {setSubmitting, setFieldValue, setStatus, props}
  ) => {
    props.fetchUserDataAction(values, setStatus, setSubmitting, setFieldValue)
    if (props.isAuth) {
      props.history.push("/")
    }
  },
  displayName: "LoginForm",
})(LoginForm)

const connector = connect(({user}: RootState) => ({isAuth: user.isAuth}), {
  fetchUserDataAction,
})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(withRouter(LoginFormContainer))
