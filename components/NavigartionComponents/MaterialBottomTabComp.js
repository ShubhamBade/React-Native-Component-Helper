import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const MaterialBottomTabComp = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'violet' }}
        >
            <Tab.Screen name="Home" component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => {
                  <MaterialCommunityIcons name="Home" color={color} size={20} />
                },
              }}
            />
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

export default MaterialBottomTabComp