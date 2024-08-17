import React from 'react'

import { render } from '@testing-library/react-native'
import Greeting from 'components/testComps/Greeting'

describe('Greeting Component', () => {
  it('Displays French Bonjour', () => {
    const { getByText } = render(<Greeting name={'Alice'} ln={'French'} />)

    expect(getByText('Bonjour Alice')).toBeTruthy()
  })

  it('Displays jaoan konniciwa', () => {
    const { getByText } = render(<Greeting name={'Alice'} ln={'Japanese'} />)

    expect(getByText('konnichiwa Alice')).toBeTruthy()
  })

  it('Displays  Hello', () => {
    const { getByText } = render(<Greeting name={'Alice'} ln={'English'} />)

    expect(getByText('Hello Alice')).toBeTruthy()
  })
})
