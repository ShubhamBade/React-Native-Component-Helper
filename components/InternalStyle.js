import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InternalStyle = () => {
  return (
    <View style={{alignItems:"center",marginTop:25}}>
      <Text style={{fontSize:20,color:"blue"}}>InternalStyle</Text>
      <Text style={styles.text1}> Applying Internal Style on Me</Text>
      <Text style={styles.text1}> Applying Internal Style on Me</Text>
      <Text style={styles.text1}> Applying Internal Style on Me</Text>
    </View>
  )
}

//need to declare style outside the function

const styles=StyleSheet.create({
    text1:{
        fontSize:20,
        fontWeight:"bold",
        backgroundColor:"pink",
        color:"blue",
        margin:5,
        borderRadius:10,
        height:45,
        verticalAlign:"middle",
        borderColor:"blue",
        borderWidth:2
    },
    text2:{
        backgroundColor:"red"
    }

})

export default InternalStyle