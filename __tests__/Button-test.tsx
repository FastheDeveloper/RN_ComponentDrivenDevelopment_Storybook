import React from 'react'

import { render, fireEvent } from '@testing-library/react-native'
import Button from 'components/testComps/Button'

describe('MyButtons', () => {
  it('calls Unpressed when clicked', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(<Button title="Max" onPress={mockOnPress} />)
    const pressMeButton = getByTestId('testClick')
    fireEvent.press(pressMeButton)

    expect(mockOnPress).toHaveBeenCalled()
  })
})
