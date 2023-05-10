import { View, Text, Button, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'

const ModalDialogBox = () => {
    const [show, setShow] = useState(false)
    return (
        <View style={styles.main}>

            <Modal transparent={true} visible={show} animationType='fade'>
                <View style={styles.centeredview}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>Hello React native Modal</Text>
                        <Button title='Close Model' onPress={() => setShow(false)} />
                    </View>
                </View>
            </Modal>

            <View style={styles.buttonStyle}>
                <Button title='Open Model' onPress={() => setShow(true)} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    buttonStyle: {
        flex: 1,
        justifyContent: "flex-end"
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
    text: {
        fontSize: 25,
        color: "white",
        marginBottom: 10
    }

})

export default ModalDialogBox