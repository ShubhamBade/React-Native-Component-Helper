import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const ButtonEvent = () => {

    const[name,setName]=useState("Shubham");

    const buttonEventHandle=()=>{
        console.warn("Hello Shubham Bade");
        setName("shubham bade")
    }

    const handledata=(data)=>{
        console.warn("My Name : ",data)
    }
  return (
    <View style={{marginTop:10,alignItems:"center"}}>
      <Text style={{fontSize:25,marginBottom:5}}>Button and onPress Event</Text>
      <Button title='Press On Me' onPress={buttonEventHandle} color={"blue"}/>

      <Button color={"grey"} title='Choose Me' onPress={()=>setName("Its Me")}/>
      <Button color={"grey"} title='See Name' onPress={()=>handledata("Bade")}/>
      <Text style={{fontSize:25,color:"blue",margin:5}}>{name}</Text>
    </View>
  )
}

export default ButtonEvent