import { View, Text, StyleSheet,TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const TextInputHandle = () => {
  const [data,setData]=useState("");
  const display=()=>{
    console.warn(data);
  }
  return (
    <View style={{margin:5}}>
      <Text style={styles.text}>Handle Your Text Input Here : {data}</Text>
      <TextInput style={styles.textInput} value={data} placeholder='Enter Your Name Here' onChangeText={(t)=>setData(t)}/>
      <Button color={"black"} title="Press On Me" onPress={display}/>
      <Button title="Clear Everything" onPress={()=>setData("")}/>
    </View>
  )
}

const styles=StyleSheet.create({
    text:{
        fontSize:25,
        color:"blue",
        textAlign:"center",
        margin:10,
    },
    textInput:{
        fontSize:20,
        textAlign:"center",
        backgroundColor:"grey",
        margin:20,
        borderRadius:10,
        borderColor:"blue",
        borderWidth:3,
    },
})

export default TextInputHandle