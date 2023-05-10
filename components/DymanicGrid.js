import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const DymanicGrid = () => {
    const users=[
        {
            id:1,
            name:"Shubham"
        },
        {
            id:2,
            name:"Shubham"
        },
        {
            id:3,
            name:"Shubham"
        },
        {
            id:4,
            name:"Shubham"
        },
        {
            id:5,
            name:"Shubham"
        },
    ]
  return (
    <>
    <View>
      <Text style={styles.tittle}>DymanicGrid</Text>
      {/* <View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
        <Text style={styles.itemstyle}>Item 1</Text>
        <Text style={styles.itemstyle}>Item 2</Text>
        <Text style={styles.itemstyle}>Item 3</Text>
        <Text style={styles.itemstyle}>Item 4</Text>
        <Text style={styles.itemstyle}>Item 5</Text>
        <Text style={styles.itemstyle}>Item 6</Text>
        <Text style={styles.itemstyle}>Item 7</Text>
        <Text style={styles.itemstyle}>Item 9</Text>
        <Text style={styles.itemstyle}>Item 10</Text>
      </View> */}
      <View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
        <FlatList
        data={users}
        renderItem={({item})=><Text style={styles.itemstyle}>{item.name}</Text>}
        keyExtractor={item=>item.id}
        />
      </View>
    </View>
    </>
  )
}

const styles=StyleSheet.create({
    tittle:{
        fontSize:25,
        textAlign:"center",
        margin:5
    },
    itemstyle:{
        fontSize:25,
        fontWeight:"bold",
        backgroundColor:"blue",
        width:120,
        height:120,
        color:"white",
        margin:5,
        textAlign:"center",
        textAlignVertical:"center",
        borderRadius:5
    }
})
export default DymanicGrid