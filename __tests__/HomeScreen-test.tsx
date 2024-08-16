import React from 'react'
import Fas from 'components/fas'
import { render } from '@testing-library/react-native'

describe('Fas Renderer', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(<Fas />)

    const textLabel = getByText('Fash')

    expect(textLabel).toBeTruthy()
  })
})
