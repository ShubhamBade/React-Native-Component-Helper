import { View, StyleSheet } from 'react-native'
import React from 'react'

const FlexArrangementComp = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}></View>
      <View style={styles.box2}>
        <View style={styles.iView1}></View>
        <View style={styles.iView2}></View>
        <View style={styles.iView3}></View>
      </View>
      <View style={styles.box3}></View>
    </View>
  )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        margin:10,
    },
    box1:{
        flex:1,
        backgroundColor:"green",
        borderRadius:25,
        marginBottom:10
    },
    box2:{
        flex:1,
        backgroundColor:"pink",
        flexDirection:"row",
        borderRadius:25,
        marginBottom:10
    },
    box3:{
        flex:1,
        backgroundColor:"orange",
        borderRadius:25,
        marginBottom:10
    },
    iView1:{
        flex:1,
        backgroundColor:"white",
        borderRadius:20,
        margin:10
    },
    iView2:{
        flex:1,
        backgroundColor:"black",
        borderRadius:20,
        margin:10
    },
    iView3:{
        flex:1,
        backgroundColor:"blue",
        borderRadius:20,
        margin:10
    },
    
})

export default FlexArrangementComp