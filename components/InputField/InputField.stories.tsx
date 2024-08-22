import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { View } from 'react-native'
import InputField from './InputField'

const InputFieldMeta: Meta<typeof InputField> = {
  title: 'Input Field',
  component: InputField,
  argTypes: {},
  args: {
    label: 'Story Input',
  },
  decorators: [
    (Story) => (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
}

export default InputFieldMeta

export const Default: StoryObj<typeof InputField> = {}

export const PasswordInput: StoryObj<typeof InputField> = {
  args: {
    secureTextEntry: true,
  },
}

export const LeftIconInput: StoryObj<typeof InputField> = {
  args: {
    leftIcon: 'user-circle',
  },
}

export const RightIconInput: StoryObj<typeof InputField> = {
  args: {
    rightIcon: 'star',
  },
}

export const SafetyRightIconWithSecureEntryInput: StoryObj<typeof InputField> = {
  args: {
    rightIcon: 'star',
    secureTextEntry: true,
  },
}
