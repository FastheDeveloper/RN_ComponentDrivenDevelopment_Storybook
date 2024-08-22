import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from 'components/Button/AppButton'
import { CheckBox } from '@/components/CheckBox/Checkbox'
import { Task } from '@/components/SingleTask/Task'
import InputField from '@/components/InputField/InputField'

const OnboardingScreen = () => {
  return (
    <View>
      {/* <AppButton label="Get Started" /> */}
      {/* <CheckBox onPress={() => {}} selected={false} /> */}
      {/* <Task
        task={{
          id: 1,
          title: 'Jack',
          state: 'TASK_ARCHIVED',
        }}
        onArchiveTask={() => console.log('fas')}
        onPinTask={() => console.log('Jak')}
      /> */}

      <InputField label="TextInput" rightIcon="check" leftIcon="eye" placeholder="Testing" secureTextEntry={true} />
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})
