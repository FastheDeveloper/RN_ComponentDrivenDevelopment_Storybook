import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputField from '@/components/InputField/InputField'

const SIgnUpScreen = () => {
  const validateEmail = (email: string) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  return (
    <View>
      <View className=" items-center  ">
        <Text className="text-lg text-[#212529] font-bold text-2xl">Let's Gets Signed Up</Text>
        <Text className="text-[#A3AAB0]"> Create a new account</Text>
      </View>

      <InputField leftIcon="user-o" placeholder="Enter your name" />
      <InputField
        leftIcon="envelope-o"
        placeholder="Enter your email"
        rightIcon={validateEmail('email@gmail.com') ? 'check' : undefined}
      />

      <InputField leftIcon="lock" placeholder="Enter your Password" secureTextEntry />
      <InputField leftIcon="lock" placeholder="Re-Enter your Password" secureTextEntry />
    </View>
  )
}

export default SIgnUpScreen

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    alignItems: 'center',
  },
})
