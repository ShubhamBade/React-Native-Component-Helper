import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'

const FlatListNative = () => {

    const users = [
        {
            id: "101",
            name: "Shubham"
        },
        {
            id: "102",
            name: "Anai"
        },
        {
            id: "103",
            name: "VivoBook"
        },
        {
            id: "104",
            name: "Ultra Plus"
        },
    ]

    const country=["India","china","Indonesia","UK","USA","IT","Jermany"]
    return (
        <>
            <View>
                <Text style={styles.tittle}>FlatListNative</Text>
                <FlatList
                    data={users}
                    renderItem={({ item }) => <Text style={styles.flatItem}>{item.name}</Text>}
                    keyExtractor={item => item.id}
                />
            </View>

            <View>
                <ScrollView style={{marginBottom:50}}>
                {/* <FlatList
                data={country}
                renderItem={({item})=><Text style={styles.flatItem}>{item}</Text>}
                /> */}
                <Text style={styles.tittle}>Listing Item Using Map()</Text>
                {
                    country.map((item)=><Text style={styles.flatItem}>{item}</Text>)
                }
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    tittle: {
        fontSize: 25,
        textAlign: "center",
        margin: 5
    },
    flatItem: {
        textAlign: "center",
        color: "white",
        fontSize: 25,
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'black',
        borderWidth: 3,
        borderColor: "blue"
    }
})

export default FlatListNative