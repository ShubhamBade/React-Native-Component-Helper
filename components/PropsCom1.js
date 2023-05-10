import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import PropsCom2 from './PropsCom2'

const PropsCom1 = () => {

    const [name,setName]=useState("Shubham")
  return (
    <View style={{alignItems:"center",marginTop:15}}>
      <Text style={{fontSize:20}}>PropsCom1 Sending Data</Text>
      <Button title="Press on me" onPress={()=>setName("I am Bade")}/>
      <PropsCom2 name={name} city={"Pune"}/>
    </View>
  )
}

export default PropsCom1