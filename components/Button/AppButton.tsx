import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ComponentProps } from 'react'
import { APP_COLOR } from '@constants/colorConstants'
import { FontAwesome } from '@expo/vector-icons'

type buttonProps = {
  loading?: boolean
  rightIcon?: keyof typeof FontAwesome.glyphMap
  leftIcon?: keyof typeof FontAwesome.glyphMap
  label: string
} & ComponentProps<typeof Pressable>

const AppButton = ({ loading, leftIcon, label, rightIcon, ...pressableProps }: buttonProps) => {
  const content = loading ? (
    <>
      <View
        // style={styles.loaderWrapper}
        className="justify-center h-7"
      >
        <ActivityIndicator size="small" color={'white'} animating={true} />
      </View>
    </>
  ) : (
    <>
      {leftIcon && (
        <View
          // style={styles.leftIcon}
          className="absolute left-5"
        >
          <FontAwesome name={leftIcon} size={20} />
        </View>
      )}
      <Text
        // style={styles.buttonText}
        className="text-APP_COLOR-MAIN_WHITE text-center text-lg font-bold "
      >
        {label}
      </Text>
      {rightIcon && (
        <View
          // style={styles.rightIcon}
          className="absolute right-5"
        >
          <FontAwesome name={rightIcon} size={20} />
        </View>
      )}
    </>
  )
  return (
    <Pressable
      // style={styles.button}
      className={`w-full flex justify-center  item-center  rounded-3xl p-4 shadow-lg ${
        pressableProps.disabled ? 'bg-APP_COLOR-ACCENT_GREEN' : 'bg-APP_COLOR-MAIN_GREEN'
      }`}
      {...pressableProps}
      testID="testClick"
    >
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
