import { View, Text, StyleSheet, Button, Modal,TextInput,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const APIListComp = () => {
    const [data, setData] = useState(undefined)
    const [showModal,setshowModal]=useState(false)
    const [userId, setUserId] = useState(undefined)
    const [dataToChange,setDataToChange]=useState(undefined)

    const fetchData = async () => {
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url);
        result = await result.json();
        console.warn(result);
        setData(result);
    }

    const deleteData = async (item) => {
        console.warn(item.id);
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(`${url}/${item.id}`, { method: 'delete' })
        result = await result.json();
        if (result) {
            console.warn("Delete called");
        }
        fetchData()
    }

    const updateData = async() => {

        const url = `http://10.0.2.2:3000/users/${userId}`
        let result=await fetch(url,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name:dataToChange})
        
        })
        result=await result.json();
        console.warn(result);
        fetchData()
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <ScrollView>
        <View style={styles.main}>
            {data ? data.map((item) =>
                <View style={styles.dataWrapper} key={item.id}>
                    <View style={{ flex: 1, alignItems: "center" }}><Text style={styles.itemstyle}>{JSON.stringify(item.id)}</Text></View>
                    <View style={{ flex: 1, alignItems: "center" }}><Text style={styles.itemstyle}>{item.name}</Text></View>
                    <View style={{ flex: 1, alignItems: "center" }}><Button title="Delete" onPress={() => { deleteData(item); setUserId(item.id) }} /></View>
                    <View style={{ flex: 1, alignItems: "center" }}><Button title="Update" onPress={()=>{setshowModal(true);setUserId(item.id)}} /></View>
                </View>) : (null)}

            <Modal transparent={true} animationType='fade' visible={showModal}>
                <View style={styles.centeredview}>
                    <View style={styles.modalView}>
                        <TextInput style={styles.styleForInput}placeholder='Enter Name' value={dataToChange} onChangeText={(item)=>setDataToChange(item)}/>
                        <Button title='Save' onPress={()=>{setshowModal(false);updateData()}}/>
                    </View>
                </View>
            </Modal>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    dataWrapper: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around",
        backgroundColor: "grey",
        margin: 5,
        borderRadius: 25,
    },
    itemstyle: {
        fontSize: 20,
        color: "#fff",
        paddingVertical:5
    },
    modalStyle: {
        justifyContent: "center",
        alignItems: "center"
    },
    centeredview: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        backgroundColor: "pink",
        padding: 30,
        borderRadius: 20,
        shadowColor: "black",
        elevation: 10,
        shadowOpacity: 1
    },
    styleForInput:{
        fontSize:20,
        borderColor:"blue",
        borderWidth:2,
        borderRadius:25,
        marginBottom:10
    }
})

export default APIListComp