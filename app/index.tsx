import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import SIgnUpScreen from '@/src/screens/SIgnUpScreen'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

function Page() {
  const { top, bottom } = useSafeAreaInsets()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    main: {
      flex: 1,
      marginTop: top * 1.2,
      marginBottom: bottom,
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
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <SIgnUpScreen />
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
