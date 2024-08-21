import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { CheckBox } from './Checkbox'

const CheckButton: Meta<typeof CheckBox> = {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    selected: true,
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
}

export default CheckButton

export const SelectedButton: StoryObj<typeof CheckBox> = {}

export const unselectedButton: StoryObj<typeof CheckBox> = {
  args: {
    selected: false,
  },
}
