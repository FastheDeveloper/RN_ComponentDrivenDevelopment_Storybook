import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export type MyButtonProps = {
  onPress: () => void
  selected: boolean
}

export const CheckBox = ({ onPress, selected }: MyButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#D3D8FF',
    },
  })
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: 30,
          height: 30,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
      onPress={() => onPress()}
      activeOpacity={0.8}
    >
      {selected && <FontAwesome name="check" size={20} />}
    </TouchableOpacity>
  )
}
