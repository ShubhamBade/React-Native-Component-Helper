import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomTabNavigatorComp = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
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
export default BottomTabNavigatorComp