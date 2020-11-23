export interface IFormErrors {
  email?: string
  fullName?: string
  password?: string
  passwordConfirm?: string
}

export interface ILoginFormValues {
  email: string
  password: string
}

export interface IRegistrationFormValues extends ILoginFormValues {
  fullName: string
  passwordConfirm: string
}
