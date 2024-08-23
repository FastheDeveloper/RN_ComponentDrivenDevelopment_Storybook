import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputField from '@/components/InputField/InputField'
import AppButton from '@/components/Button/AppButton'
import { validateEmail, passwordsMatch, allFieldsFilled } from '../utils/Validators'

export interface UserDetails {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const initialUserDetails: UserDetails = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SIgnUpScreen = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>(initialUserDetails)
  const [loading, setLoading] = useState<boolean>(false)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

  const handlePress = () => {
    setLoading(true)

    if (timerId) {
      clearTimeout(timerId)
    }

    const id = setTimeout(() => {
      setLoading(false)
    }, 3000)

    setTimerId(id)
  }

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [timerId])

  const handleChange = (name: keyof UserDetails, value: string) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const isFormValid = () => {
    return (
      validateEmail(userDetails.email) &&
      passwordsMatch(userDetails.password, userDetails.confirmPassword) &&
      allFieldsFilled(userDetails)
    )
  }
  return (
    <View className=" flex-1 mx-4">
      <View className=" items-center  ">
        <Text className="text-lg text-[#212529] font-bold text-2xl">Let's Gets Signed Up</Text>
        <Text className="text-[#A3AAB0]"> Create a new account</Text>
      </View>
      <View>
        <InputField
          leftIcon="user-o"
          placeholder="Enter your name"
          onChangeText={(text) => handleChange('name', text)}
        />
        <InputField
          leftIcon="envelope-o"
          placeholder="Enter your email"
          rightIcon={validateEmail(userDetails.email) ? 'check' : undefined}
          onChangeText={(text) => handleChange('email', text)}
        />

        <InputField
          leftIcon="lock"
          placeholder="Enter your Password"
          secureTextEntry
          onChangeText={(text) => handleChange('password', text)}
        />
        <InputField
          leftIcon="lock"
          placeholder="Re-Enter your Password"
          secureTextEntry
          onChangeText={(text) => handleChange('confirmPassword', text)}
        />
      </View>
      <View className="flex-1 justify-end mx-2">
        <AppButton label="Sign Up" disabled={!isFormValid()} onPress={handlePress} loading={loading} />
      </View>
    </View>
  )
}

export default SIgnUpScreen
