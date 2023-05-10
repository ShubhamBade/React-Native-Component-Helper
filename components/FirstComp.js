import { View, Text } from 'react-native'
import React from 'react'

const Technology="React Native"
const type=()=>{
    return "Mobile Application"
}
const FirstComp = () => {
  return (
    <View style={{marginTop:10,alignItems:'center'}}>
      <Text style={{fontSize:25,color:"blue"}}>View, Text and Button Component</Text>
      <Text>Technology Name :{Technology}</Text>
      <Text>Type : {type()}</Text>
      <Text>Your Version :{15>20?"15-20":"10-15"}</Text>
      <FirstComp2/>
    </View>
  )
}


const FirstComp2 = () => {
    return (
      <View>
        <Text style={{fontSize:20}}>I am your Functional Componant Two</Text>
        <Text style={{fontSize:15,fontWeight:"bold"}}>Rendering this data from 2nd Component</Text>
      </View>
    )
  }

export default FirstComp

