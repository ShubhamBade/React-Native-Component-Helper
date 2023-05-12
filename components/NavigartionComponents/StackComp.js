import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();
const StackComp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                        headerStyle:{
                            backgroundColor:"violet",
                        },
                        headerTintColor:"white", //for header text color
                        headerTitleStyle:{
                            fontSize:20,
                        }
                    }}>
                <Stack.Screen name="Home Screen" component={Home}
                  //  options can use to style header
                />
                <Stack.Screen name="Login Screen" component={Login}/>
                <Stack.Screen name="Profile" component={Profile} options={{
                    headerRight:()=><HeaderButton/>,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const HeaderButton=({navigation})=>{
    return(
        <Button title='Log Out' color={"black"} />//onPress={() => navigation.navigate("Login Screen")}
    )
}

const Home = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:25, color:"blue",fontWeight:"bold",margin:5}}>You are On Home Page</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login Screen')}
            />
        </View>
    )
}

const Login = ({navigation}) => {
    const [name,setName]=useState("Shubham")
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:25, color:"blue",fontWeight:"bold",margin:5}}>You are On Login Page</Text>
            <Button title="Go to Profile" onPress={() => navigation.navigate("Profile",{name})} />
            <Button title="Go back Home" onPress={() => navigation.goBack()} />
        </View>
    )
}

const Profile = ({navigation,name}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:25, color:"blue",fontWeight:"bold",margin:5}}>Welcome {name?name:"Default"}</Text>
            <View style={{margin:5}}>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
            <Button title="Go back Home" onPress={() => navigation.navigate("Home Screen")} />
        </View>
    )
}
export default StackComp