export interface IFormErrors {
  email?: string
  fullName?: string
  password?: string
  passwordConfirm?: string
}

export interface IFormValues {
  email?: string
  fullName?: string
  password?: string
  passwordConfirm?: string
  [key: string]: string | undefined
}

