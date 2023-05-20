import { View, Text ,StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ReactNativeKeyboardawareSrollView = () => {
  return (
    <KeyboardAwareScrollView style={styles.conatiner} extraHeight={120} enableOnAndroid={true}>
        <TextInput style={styles.textInput} placeholder='Last Name' />
        <TextInput style={styles.textInput} placeholder='Last Name' />
        <TextInput style={styles.textInput} placeholder='Last Name' />
        <TextInput style={styles.textInput} placeholder='Last Name' />
        <TextInput style={styles.textInput} placeholder='Last Name' />
        <TextInput style={styles.textInput} placeholder='Your Pincode' />
        <TextInput style={styles.textInput} placeholder='Your Phone' />
        <TextInput style={styles.textInput} placeholder='Your City' />
        <TextInput style={styles.textInput} placeholder='Your Email' />
    </KeyboardAwareScrollView>
  )
}

const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'pink'
    },
    textInput:{
        fontSize: 18,
        textAlign: "left",
        fontFamily: 'Poppins-Regular',
        backgroundColor: "#F1F6F9",
        marginLeft:'auto',
        marginRight:'auto',
        width:'83%',
        margin: 25,
        marginBottom:0,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'rgba(176, 164, 164, 0.1)',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    }
})
export default ReactNativeKeyboardawareSrollView