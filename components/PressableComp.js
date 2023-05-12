import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PressableComp = () => {
  return (
    <View style={styles.main}>
      <Pressable
      onPress={()=>{console.warn("I am Pressable Button")}}
      onLongPress={()=>{console.warn("On Long Press")}}
      onPressIn={()=>{console.warn("Pressed on Button")}}
      onPressOut={()=>{console.warn("Pressed Out")}}
      >
        <Text style={styles.buttonPressabel}>Pressable Button</Text>
      </Pressable>
    </View>
  )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
    },
    buttonPressabel:{
        fontSize:25,
        backgroundColor:"grey",
        color:"#fff",
        textAlign:"center",
        margin:25,
        borderRadius:25,
        padding:5,
        shadowColor:"black",
        elevation:1,
        shadowOpacity:10
    }
})

export default PressableComp