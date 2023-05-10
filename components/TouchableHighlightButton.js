import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

const TouchableHighlightButton = () => {
  return (
    <View style={{flex:1}}>
      <Text style={styles.tittle}>TouchableHighlightButton</Text>
      <TouchableHighlight>
        <Text style={styles.pButton}>Primary Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.pButton,styles.sButton]} onPress={()=>console.warn("Welcome")}>Secondary Button</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles=StyleSheet.create({
    tittle:{
        fontSize:25,
        backgroundColor:"grey",
        color:"#fff",
        textAlign:"center",
        margin:10
    },
    pButton:{
        color:"#fff",
        backgroundColor:"blue",
        textAlign:"center",
        margin:10,
        fontSize:25,
        borderRadius:20,
        padding:5,
        shadowColor:"black",
        elevation:8,
        shadowOpacity:1
    },
    sButton:{
        backgroundColor:"grey"
    }
})

export default TouchableHighlightButton