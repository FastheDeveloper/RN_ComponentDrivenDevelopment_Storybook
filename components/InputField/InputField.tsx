import { Pressable, Text, TextInput, View } from 'react-native'
import React, { ComponentProps, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

type buttonProps = {
  rightIcon?: keyof typeof FontAwesome.glyphMap
  leftIcon?: keyof typeof FontAwesome.glyphMap
  label?: string
} & ComponentProps<typeof TextInput>

const InputField = ({ leftIcon, label, rightIcon, ...inputProps }: buttonProps) => {
  const [hide, setHide] = useState(true)
  return (
    <View className="mx-2">
      <Text className="text-lg font-bold mb-2">{label}</Text>

      <View className="flex-row justify-between items-center bg-white w-full  mt-2 rounded-xl shadow-sm border border-APP_COLOR-MAIN_GREY ">
        {leftIcon && (
          <View className="ml-2" testID="left-icon">
            <FontAwesome name={leftIcon} size={20} />
          </View>
        )}

        <TextInput
          className={`h-[52px] ${rightIcon || inputProps.secureTextEntry ? ' w-[85%]' : 'w-full'} px-[2%]  `}
          {...inputProps}
          secureTextEntry={inputProps.secureTextEntry && !rightIcon ? hide : undefined}
          testID="text-input"
        />

        {(rightIcon || inputProps.secureTextEntry) && (
          <View className="mr-2" testID="right-icon">
            <Pressable onPress={() => (rightIcon ? null : setHide(!hide))} testID="passwordTest">
              <FontAwesome
                name={rightIcon || (inputProps.secureTextEntry && (hide ? 'eye' : 'eye-slash')) || undefined}
                size={20}
              />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  )
}

export default InputField
