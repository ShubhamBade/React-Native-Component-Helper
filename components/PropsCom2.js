import { View, Text } from 'react-native'
import React from 'react'

const PropsCom2 = (props) => {
  return (
    <View>
      <Text style={{fontSize:20}}>PropsCom2 Reciving Data</Text>
      <Text style={{fontSize:15,color:"black"}}>My Name :{props.name}</Text>
      <Text style={{fontSize:15,color:"black"}}>My City :{props.city}</Text>
    </View>
  )
}

export default PropsCom2