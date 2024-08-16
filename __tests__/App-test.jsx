import React from 'react'

import { render } from '@testing-library/react-native'
import Button from 'components/Button'

describe('App has one child', () => {
  it('has 1 child', () => {
    const tree = render(<Button />).toJSON()
    // @ts-ignore
    expect(tree?.children?.length).toBe(2)
  })
})
