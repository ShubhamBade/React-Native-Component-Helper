import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const StatusBarComp = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={"violet"}
        hidden={false}
        barStyle={'light-content'}
      />
    </View>
  )
}

export default StatusBarComp