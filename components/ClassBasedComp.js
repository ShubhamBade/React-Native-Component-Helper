import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

export class ClassBasedComp extends Component {
    constructor(){
        super();
        this.state={
            name:"Shubham"
        }
    }
  render() {
    return (
        <>
      <View>
        <Text style={styles.tittle}>ClassBased Component</Text>
        <TextInput placeholder='Enter Your Name Here' onChangeText={(val)=>{this.setState({name:val})}}/>
        <View style={{margin:5}}>
            <Button title='Submit' onPress={()=>{this.setState({name:"Bade"})}}></Button>
        </View>
        <ClassBasedComp2 name={this.state.name}/>
      </View>
      </>
    )
  }
}

export class ClassBasedComp2 extends Component {
    render() {
      return (
        <View>
          <Text style={styles.tittle}>ClassBased Component2</Text>
          <Text>{this.props.name}</Text>
        </View>
      )
    }
  }

const styles=StyleSheet.create({
    tittle:{
        backgroundColor:"grey",
        textAlign:"center",
        fontSize:25,
        color:"white",
        margin:5
    }
})
export default ClassBasedComp