import type { Meta, StoryObj } from '@storybook/react'

import AppButton, { Titles } from './AppButton'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'

const AppButtonMeta: Meta<typeof AppButton> = {
  title: 'Button',
  component: AppButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    title: Titles.BLAND,
    label: 'Story Button',
    loading: false,
    // leftIcon: <FontAwesome name={'paper-plane'} size={20} />,
    // rightIcon: <FontAwesome name={'user-circle-o'} size={20} />,
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

export const MainButton: StoryObj<typeof AppButton> = {
  args: {},
  parameters: {
    noBackground: true,
  },
}
