import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native'
import React, { useState } from 'react'

const PostApiComp = () => {
    const [name,setName]=useState(undefined);
    const [profile,setProfile]=useState(undefined);
    const [course,setCourse]=useState(undefined);

    const data={
        name:"POCO M2 pro",
        profile:"Developer",
        course:"MCA masters"
    }
    const ApiPostcall = async() => {
        //console.warn("Hello");
        const url="http://10.0.2.2:3000/users"
        let result= await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,profile,course})
        })
        result=await result.json();
        console.warn(result);
    }
    return (
        <View style={styles.main}>
            <Text style={styles.tittle}>PostApiComp</Text>
            <View>
                <TextInput style={styles.inputText} placeholder='Enter Your Name' onChangeText={(text)=>setName(text)} value={name}/>
                <TextInput style={styles.inputText} placeholder='Enter Your Profile' onChangeText={(text)=>setProfile(text)} value={profile}/>
                <TextInput style={styles.inputText} placeholder='Enter Your Course' onChangeText={(text)=>setCourse(text)} value={course}/>
            </View>
            <TouchableHighlight>
                <Text style={styles.fetchButton} onPress={ApiPostcall}>Post Data</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    tittle: {
        fontSize: 25,
        color: "#fff",
        backgroundColor: "grey",
        textAlign: "center",
        padding: 5,
        margin: 10,
    },
    fetchButton: {
        fontSize: 20,
        backgroundColor: "violet",
        color: "#fff",
        margin: 5,
        borderRadius: 25,
        textAlign: "center",
        padding: 5
    },
    inputText:{
        fontSize:25,
        backgroundColor:"pink",
        color:"#fff",
        alignItems:"center",
        borderRadius:25,
        margin:10,
        padding:5
    }
})
export default PostApiComp