import { View, Text, StyleSheet, TouchableHighlight, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const SimpleFreeApi = () => {
    const [data, setData] = useState(undefined)
    const ApiCall = async () => {
        // const url = "https://jsonplaceholder.typicode.com/posts"
        const url="http://10.0.2.2:3000/users"
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        ApiCall();
    }, [])
    return (
        <View style={styles.main}>
            <Text style={styles.tittle}>SimpleFreeApi</Text>
            {/* <ScrollView>
                {data ? data.map((item) => <Text key={item.id} style={{ fontSize: 25, margin: 10 }}>Data: {JSON.stringify(item.title)}</Text>) : null}
            </ScrollView> */}

            <FlatList
                data={data}
                renderItem={({item})=><View><Text style={{ fontSize: 25, margin: 10, backgroundColor:"grey",color:"#fff",textAlign:"center",borderRadius:25 }}>Id: {item.id}</Text>
                <Text style={{ fontSize: 25, margin: 10 }}>{item.name}</Text>
                <Text style={{ fontSize: 25, margin: 10 }}>{item.profile}</Text>
                </View>
            }
            />
            <TouchableHighlight>
                <Text style={styles.fetchButton} onPress={ApiCall}>Fetch Data</Text>
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

    }
})
export default SimpleFreeApi