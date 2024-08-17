import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import Fas from '@components/testComps/fas'
import AppButton from 'components/Button/AppButton'
import OnboardingScreen from 'src/screens/OnboardingScreen'

function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <OnboardingScreen />
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
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <StorybookUI />
      </View>
    )
  }
}

export default AppEntryPoint
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // padding: 24,
    paddingHorizontal: 30,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    // maxWidth: 960,
    // marginHorizontal: 'auto',
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
