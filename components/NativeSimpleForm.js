import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const NativeSimpleForm = () => {
    const [name, setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [display,setDisplay]=useState(false)

    const clearForm=()=>{
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
        <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 30, marginTop: 5 }}>NativeSimpleForm Singin Up</Text>
            <TextInput style={styles.textInput}
                value={name}
                onChangeText={(name)=>setName(name)}
                placeholder='Enter Your Name Here' />

            <TextInput style={styles.textInput}
                value={email}
                onChangeText={(email)=>setEmail(email)}
                placeholder='Enter Your Email Here' />

            <TextInput style={styles.textInput}
                secureTextEntry={true}
                value={password}
                onChangeText={(password)=>setPassword(password)}
                placeholder='Enter Your Password Here' />

            <View style={{margin:10}}>
                <Button color={"blue"} 
                onPress={()=>setDisplay(true)}
                title='Sign Up Me' />

                <Button color={"red"}
                onPress={()=>{clearForm();setDisplay(false)}}
                title='Clear Form' />
            </View>

        <View>
        {display?<Text style={styles.display}>Form Details : {name},{email},{password}</Text>:<Text style={styles.display}>>No Form Data</Text>}
        </View>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        margin: 5,
        fontSize: 20,
        textAlign: "center",
        borderWidth: 2,
        borderColor: "blue",
        backgroundColor: "pink",
        borderRadius: 5,

    },
    display:{
        fontSize:20,
        color:"blue",
        backgroundColor:"pink",
    }
})
export default NativeSimpleForm