import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const DynamicRadioOption = () => {
    const [show, setShow] = useState(1)
    const data = [
        {
            id:1,
            country:"India"
        },
        {
            id:2,
            country:"USA"
        },{
            id:3,
            country:"UK"
        },
    ]
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,flexDirection:"row"}}>
            {
                data.map((item) => <TouchableOpacity style={{ margin: 10 }}
                key={item.id}
                onPress={()=>setShow(item.id)}
                >
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.radio}>
                            {show==item.id ? <View style={styles.radioBg} /> : null}
                        </View>
                        <View>
                            <Text style={styles.radioText}>{item.country}</Text>
                        </View>
                    </View>
                </TouchableOpacity>)
            }
        </View>
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
        marginLeft: 10

    },
    radio: {
        height: 40,
        width: 40,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 2
    },
    radioBg: {
        backgroundColor: "black",
        height: 28,
        width: 28,
        borderRadius: 20,
        margin: 4
    }
})

export default DynamicRadioOption