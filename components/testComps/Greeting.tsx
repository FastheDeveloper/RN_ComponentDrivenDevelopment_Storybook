import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface props {
  name: string
  ln: string
}
const Greeting = ({ name, ln }: props) => {
  const greeting = (): string => {
    switch (ln.toLowerCase()) {
      case 'french':
        return 'Bonjour'
      case 'japanese':
        return 'konnichiwa'
      default:
        return 'Hello'
    }
  }
  return (
    <View>
      <Text>
        {greeting()} {name}
      </Text>
    </View>
  )
}

export default Greeting

const styles = StyleSheet.create({})
