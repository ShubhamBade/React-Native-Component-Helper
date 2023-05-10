import { View, Text } from 'react-native'
import React from 'react'
import ExStyles from "./css/ExStyles"

const ExternalStyle = () => {
  return (
    <View>
      <Text style={ExStyles.textDeco}>ExternalStyle</Text>
    </View>
  )
}

export default ExternalStyle