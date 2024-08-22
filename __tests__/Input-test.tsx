import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import InputField from '@/components/InputField/InputField'
// InputFieldt

describe('InputField', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(<InputField label="Test Label" />)
    expect(getByText('Test Label')).toBeTruthy()
  })

  it('renders left icon when provided', () => {
    const { getByTestId } = render(<InputField leftIcon="user" />)
    expect(getByTestId('left-icon')).toBeTruthy()
  })

  it('renders right icon when provided', () => {
    const { getByTestId } = render(<InputField rightIcon="lock" />)
    expect(getByTestId('right-icon')).toBeTruthy()
  })

  it('toggles password visibility when secureTextEntry is true', () => {
    const { getByTestId } = render(<InputField secureTextEntry />)
    const passwordToggle = getByTestId('passwordTest')
    const input = getByTestId('text-input')

    expect(input.props.secureTextEntry).toBe(true)
    fireEvent.press(passwordToggle)
    expect(input.props.secureTextEntry).toBe(false)
    fireEvent.press(passwordToggle)
    expect(input.props.secureTextEntry).toBe(true)
  })

  it('passes additional props to TextInput', () => {
    const { getByTestId } = render(<InputField placeholder="Enter text" />)
    const input = getByTestId('text-input')
    expect(input.props.placeholder).toBe('Enter text')
  })
})
