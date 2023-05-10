import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const RadioButtonComp = () => {
    const [show,setShow]=useState(true)
    return (
        <>
            <Text style={styles.tittle}>Radio Button Componant</Text>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity style={{margin:10}}>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <View style={styles.radio}>
                        {show?<View style={styles.radioBg}/>:null}
                        </View>
                        <View>
                            <Text style={styles.radioText} onPress={()=>setShow(!show)}>Radio 1</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <View style={styles.radio}>{!show?<View style={styles.radioBg}/>:null}</View>
                        <View>
                            <Text style={styles.radioText} onPress={()=>setShow(!show)}>Radio 2</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    tittle: {
        fontSize: 25,
        textAlign: "center",
        backgroundColor: "grey",
        color: "#fff",
        margin: 5
    },
    radioText: {
        fontSize: 25,
        marginLeft:10

    },
    radio: {
        height: 40,
        width: 40,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 2
    },
    radioBg:{
        backgroundColor:"black",
        height:28,
        width:28,
        borderRadius:20,
        margin:4
    }
})

export default RadioButtonComp