import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ComponentProps } from 'react'
import { APP_COLOR } from '@constants/colorConstants'

type buttonProps = {
  disabled?: boolean
  loading?: boolean
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
  title?: Titles
  label: string
} & ComponentProps<typeof Pressable>

export enum Titles {
  BLAND = 'BLAND',
  LEFT_ICON = 'LeftIcon',
  RIGHT_ICON = 'RightIcon',
}

const AppButton = ({ title, disabled, loading, leftIcon, label, rightIcon, ...pressableProps }: buttonProps) => {
  const content = loading ? (
    <>
      <View style={styles.loaderWrapper}>
        <ActivityIndicator size="small" color={'white'} animating={true} />
      </View>
    </>
  ) : (
    <>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <Text style={styles.buttonText}>{label}</Text>
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </>
  )
  return (
    <Pressable style={styles.button} {...pressableProps} testID="testClick">
      {content}
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: APP_COLOR.MAIN_GREEN,
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: APP_COLOR.MAIN_WHITE,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  loaderWrapper: {
    height: 24,
    justifyContent: 'center',
  },
  rightIcon: {
    position: 'absolute',
    right: 20,
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
  },
})
