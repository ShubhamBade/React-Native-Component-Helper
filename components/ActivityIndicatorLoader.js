import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'

const ActivityIndicatorLoader = () => {
    const[show,setShow]=useState(true)
  return (
    <View style={styles.main}>
      <Text style={styles.tittle}>ActivityIndicatorLoader</Text>
      <ActivityIndicator size={"large"} animating={show}/>
      <Button title='PressMe' onPress={()=>setShow(!show)}/>
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
    },
    tittle:{
        fontSize:25,
        backgroundColor:"green",
        color:"#fff",
        textAlign:"center",
        margin:5
    }
})

export default ActivityIndicatorLoader