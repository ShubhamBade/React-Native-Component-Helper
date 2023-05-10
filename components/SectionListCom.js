import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'

const SectionListCom = () => {

    const users=[
        {
            id:1,
            name:"Shubham",
            data:["ReactJs","Native"]
        },
        {
            id:1,
            name:"John",
            data:["ReactJs","Flutter"]
        },
        {
            id:1,
            name:"Shubham",
            data:["Andriod","Flutter"]
        },

    ]
  return (
    <View>
      <Text style={styles.tittle}>SectionList Component</Text>
      <SectionList
      sections={users}
      renderItem={({item})=><Text style={styles.data}>{item}</Text>}
      renderSectionHeader={({section:{name}})=>(<Text style={styles.header}>{name}</Text>)}
      />
    </View>
  )
}

const styles=StyleSheet.create({
    tittle:{
        fontSize:25,
        backgroundColor:"grey",
        color:"white",
        textAlign:"center",
        margin:5
    },
    data:{
        marginLeft:25,
        fontSize:15,
        color:"blue"
    },
    header:{
        marginTop:5,
        color:"white",
        backgroundColor:"pink",
        fontSize:20
    }
})

export default SectionListCom