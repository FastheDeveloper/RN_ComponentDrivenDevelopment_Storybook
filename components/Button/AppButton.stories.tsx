import type { Meta, StoryObj } from '@storybook/react'

import AppButton from './AppButton'

import React from 'react'
import { View } from 'react-native'

const AppButtonMeta: Meta<typeof AppButton> = {
  title: 'Button',
  component: AppButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    label: 'Story Button',
    loading: false,
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
}

export default AppButtonMeta

export const Default: StoryObj<typeof AppButton> = {}

export const TextOnlyButton: StoryObj<typeof AppButton> = {
  args: {
    label: 'Text Button',
  },
  argTypes: {
    onPress: { action: 'Yaay' },
  },
  parameters: {
    noBackground: true,
  },
}

export const WithLeftIcon: StoryObj<typeof AppButton> = {
  args: {
    label: 'With Left Icon',
    leftIcon: 'paper-plane',
  },
  argTypes: {
    onPress: { action: 'Lefty Pressed' },
  },
  parameters: {
    noBackground: true,
  },
}

export const WithRightIcon: StoryObj<typeof AppButton> = {
  args: {
    label: 'With Right Icon',
    rightIcon: 'user-circle-o',
  },
  argTypes: {
    onPress: { action: 'Righty Pressed' },
  },
  parameters: {
    noBackground: true,
  },
}

export const WithBothIcons: StoryObj<typeof AppButton> = {
  args: {
    label: 'With Both Icons',
    rightIcon: 'user-circle-o',
    leftIcon: 'paper-plane',
  },
  argTypes: {
    onPress: { action: 'Bothy Pressed' },
  },
  parameters: {
    noBackground: true,
  },
}
