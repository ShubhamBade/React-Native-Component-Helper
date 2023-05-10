import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const LifeCycleUseEffect = () => {
    const [count, setCount]=useState(0)
    const [show, setShow]=useState(true)
    // useEffect(()=>{
    //     console.warn("UseEffect Called on everyTime")
    // })
    // useEffect(()=>{
    //     console.warn("Called at State changed/componantDidMount")
    // },[count])
  return (
    <View>
      <Text style={styles.tittle}>Life Cycle UseEffect {count}</Text>
      <Button title='Update me' onPress={()=>{setCount(count+1);setShow(!show)}}/>
      {show?<Application data={count}/>:null}
    </View>
  )
}

const Application=(props)=>{
    useEffect(()=>{
        console.warn("Application Component")
    },[props.data])
    let timeInterval= setInterval(()=>{
        console.warn("after 3Sec Application unmount but background process are running")
    },3000)
    useEffect(()=>{
        //return ()=>{console.warn("Application unmount but background process are running")}
        return ()=>{clearInterval(timeInterval)}
    })
    return(
        <View>
            <Text style={styles.tittle}>Application Data comp {props.data}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    tittle:{
        fontSize:25,
        backgroundColor:"grey",
        color:"#fff",
        textAlign:"center",
        margin:5
    }
})

export default LifeCycleUseEffect