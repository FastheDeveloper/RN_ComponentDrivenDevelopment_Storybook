import React from 'react'

import { render } from '@testing-library/react-native'
import Fas from 'components/testComps/fas'

describe('Fas Renderer', () => {
  test('Text renders same thing as me', () => {
    const { getByText } = render(<Fas />)

    const textLabel = getByText('Fasthecreator')

    expect(textLabel).toBeTruthy()
  })
})
