import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form";

const MostImportantFormArrangement = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/PocketXtraImages/Gradient14.png')}
                style={styles.ContainerBgImage}
            >
                <View style={styles.formContainer}>
                <KeyboardAvoidingView behavior="height" style={styles.formWrapper}>
                    <Text style={styles.tittle}>Add New User for an Organiser</Text>
                    <ScrollView>
                        <Controller
                            control={control}
                            rules={{ required: "Name is Required" }}
                            name='cordName'
                            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => <>
                                <TextInput value={value} onChangeText={onChange} style={styles.textInput} placeholder='Name' />
                                {error && <Text style={styles.error}>{error.message || "Error"}</Text>}
                            </>
                            }
                        />
                        <Controller
                            control={control}
                            rules={{ required: "Email id is required." }}
                            name='cordEmail'
                            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => <>
                                <TextInput value={value} onChangeText={onChange} style={styles.textInput} placeholder='Email id' />
                                {error && <Text style={styles.error}>{error.message || "Error"}</Text>}
                            </>
                            }
                        />
                        <Controller
                            control={control}
                            rules={{ required: "Phone No is required.", maxLength: 10, minLength: 10 }}
                            name='cordPhoneNo'
                            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => <>
                                <TextInput value={value} onChangeText={onChange} style={styles.textInput} placeholder='Phone No.' maxLength={10} keyboardType='numeric' />
                                {error && <Text style={styles.error}>{error.message || "Enter 10 Digit Number"}</Text>}
                            </>
                            }
                        />
                    </ScrollView>
                </KeyboardAvoidingView>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ContainerBgImage: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
        marginTop: '30%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        margin: '5%',
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 4 },
                shadowColor: 'orange',
                shadowOpacity: 1,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
        }),

    },
    textInput: {
        fontSize: 18,
        textAlign: "left",
        backgroundColor: "#F1F6F9",
        margin: 10,
        marginBottom: 0,
        borderRadius: 15,
        borderWidth: 2,
        fontFamily: 'Poppins-Regular',
        marginTop: "4%",
        borderColor: 'rgba(176, 164, 164, 0.1)',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        paddingLeft: 15
    },
    formWrapper:{
        flex:1,
        // marginTop:'30%',
        // marginLeft:'5%',
        // marginRight:'5%',
        // marginBottom:'20%',
    },
    tittle:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        marginTop:'2%',
        fontFamily:'Poppins-Regular',
        color:'#454545'
    }

})
export default MostImportantFormArrangement