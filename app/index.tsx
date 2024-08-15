import Fas from '@components/fas'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text className="text-black">Hello World</Text>
        <Fas />
        <Text className="text-white">This is the first page of your app.</Text>
      </View>
    </View>
  )
}

let AppEntryPoint = Page

if (Constants?.expoConfig?.extra?.storybookEnabled === 'true') {
  const StorybookUI = require('../.storybook').default
  console.log('Storybook')
  AppEntryPoint = () => {
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    )
  }
}

export default AppEntryPoint
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
})
