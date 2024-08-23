import { UserDetails } from '../screens/SIgnUpScreen'

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const passwordsMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword
}

// Function to check if all fields are filled
export const allFieldsFilled = (details: UserDetails): boolean => {
  return Object.keys(details).every((key) => {
    const fieldValue = details[key as keyof UserDetails]
    return fieldValue.trim() !== ''
  })
}
