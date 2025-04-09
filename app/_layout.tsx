import { View, Text } from 'react-native'
import { Slot } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <View>
      <Text>RootLayout</Text>
      <Slot/>
    </View>
  )
}

export default RootLayout