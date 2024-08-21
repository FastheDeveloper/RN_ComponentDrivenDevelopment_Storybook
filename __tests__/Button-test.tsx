import React from 'react'

import { render, fireEvent } from '@testing-library/react-native'
import AppButton from '@/components/Button/AppButton'

describe('MyButtons', () => {
  it('calls Unpressed when clicked', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(<AppButton label="Test" onPress={mockOnPress} />)
    const pressMeButton = getByTestId('testClick')
    fireEvent.press(pressMeButton)

    expect(mockOnPress).toHaveBeenCalled()
  })
})
