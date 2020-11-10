import {IFormValues, IFormErrors} from "modules/types"

interface validateProps {
  isAuth: boolean
  values: IFormValues
}

interface IRules {
  [key: string]: (value: string | undefined) => void
}

const validate = ({isAuth, values}: validateProps) => {
  const errors: IFormErrors = {}
  const rules: IRules = {
    email: value => {
      if (!value) {
        errors.email = "Введите E-Mail"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Неверный E-Mail"
      }
    },
    password: value => {
      if (!value) {
        errors.password = "Введите пароль"
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = "Слишком лёгкий пароль"
      }
    },
    passwordConfirm: value => {
      if (!isAuth && value !== values.password) {
        errors.passwordConfirm = "Пароли не совпадают"
      }
    },
    fullName: value => {
      if (!isAuth && !value) {
        errors.fullName = "Укажите свое имя и фамилию"
      }
    },
  }

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))

  return errors
}

export default validate
