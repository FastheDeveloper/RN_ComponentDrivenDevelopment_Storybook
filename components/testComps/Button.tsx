import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ComponentProps } from 'react'

type buttonProps = {
  title: string
} & ComponentProps<typeof Pressable>
const Button = ({ title, ...pressableProps }: buttonProps) => {
  return (
    <Pressable
      style={{
        backgroundColor: 'red',
      }}
      {...pressableProps}
      testID="testClick"
    >
      <Text>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({})
