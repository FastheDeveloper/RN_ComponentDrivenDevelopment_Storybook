import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import Fas from '@components/testComps/fas'
import AppButton from 'components/Button/AppButton'
import OnboardingScreen from 'src/screens/OnboardingScreen'
import SIgnUpScreen from '@/src/screens/SIgnUpScreen'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

function Page() {
  const { top, left } = useSafeAreaInsets()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'green',
      // alignItems: 'center',
      // padding: 24,
      // paddingHorizontal: 15,
    },
    main: {
      flex: 1,
      // justifyContent: 'center',
      marginTop: top * 1.2,
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
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* <OnboardingScreen /> */}
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
