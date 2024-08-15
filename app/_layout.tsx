import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, Slot } from 'expo-router'
import Constants from 'expo-constants'

const Layout = () => {
  return <Slot />
}

// let AppEntryPoint = Page

// if (Constants?.expoConfig?.extra?.storybookEnabled === 'true') {
//     console.log('Storybook')
//     AppEntryPoint = require('../.storybook').default
//   }
export default Layout

const styles = StyleSheet.create({})
