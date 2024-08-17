import React from 'react'

import { render } from '@testing-library/react-native'
import Button from 'components/testComps/Button'

describe('Button Tests', () => {
  it('has 1 child', () => {
    const tree = render(<Button title="Click" />).toJSON()
    // @ts-ignore
    expect(tree?.children?.length).toBe(1)
  })

  it('Matches past snapShot', () => {
    const snap = render(<Button title="Clik" />).toJSON()

    expect(snap).toMatchSnapshot()
  })
})
