import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const MaterialTopTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                    tabBarStyle:{
                        backgroundColor:"violet",
                        margin:5
                    },
                    tabBarLabelStyle:{
                        fontSize:25,
                        color:"#fff"
                    }
                }
                }>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Login" component={Login}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, color: "blue", fontWeight: "bold", margin: 5 }}>You are On Home Page</Text>
        </View>
    )
}

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, color: "blue", fontWeight: "bold", margin: 5 }}>You are On Login Page</Text>
        </View>
    )
}
export default MaterialTopTab