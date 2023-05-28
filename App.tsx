import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import FirstComp from './components/FirstComp'
import ButtonEvent from './components/ButtonEvent'
import PropsCom1 from './components/PropsCom1'
import InternalStyle from './components/InternalStyle'
import ExternalStyle from './components/ExternalStyle'
import TextInputHandle from './components/TextInputHandle'
import NativeSimpleForm from './components/NativeSimpleForm'
import FlatListNative from './components/FlatListNative'
import DymanicGrid from './components/DymanicGrid'
import SectionListCom from './components/SectionListCom'
import ClassBasedComp from './components/ClassBasedComp'
import LifeCycleUseEffect from './components/LifeCycleUseEffect'
import FlexArrangementComp from './components/FlexArrangementComp'
import TouchableHighlightButton from './components/TouchableHighlightButton'
import RadioButtonComp from './components/RadioButtonComp'
import DynamicRadioOption from './components/DynamicRadioOption'
import ActivityIndicatorLoader from './components/ActivityIndicatorLoader'
import ModalDialogBox from './components/ModalDialogBox'
import PressableComp from './components/PressableComp'
import StatusBarComp from './components/StatusBarComp'
import StackComp from './components/NavigartionComponents/StackComp'
import BottomTabNavigatorComp from './components/NavigartionComponents/BottomTabNavigatorComp'
import MaterialBottomTabComp from './components/NavigartionComponents/MaterialBottomTabComp'
import MaterialTopTab from './components/NavigartionComponents/MaterialTopTab'
import SimpleFreeApi from './components/apiInNative/SimpleFreeApi'
import PostApiComp from './components/apiInNative/PostApiComp'
import APIListComp from './components/apiInNative/APIListComp'
import HeaderComp from './components/reduxComponentUiTest/HeaderComp'
import ProductComp from './components/reduxComponentUiTest/ProductComp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderAndProduct from './HeaderAndProduct'
import UserListNavigationRedux from './components/reduxComponentUiTest/UserListNavigationRedux'


const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    console.log("hello")
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, textAlign: 'center', color: "blue", marginTop: 10, fontWeight: "bold" }}>
        First React Native Application
      </Text>
      <Text style={{ backgroundColor: "black", color: "white", textAlign: "center", margin: 3 }}>
        Lets Jump into Native World!!
      </Text>
      {/* <FirstComp/> */}
      {/* <ButtonEvent/> */}
      {/* <PropsCom1/> */}
      {/* <InternalStyle/> */}
      {/* <ExternalStyle/> */}
      {/* <TextInputHandle/> */}
      {/* <NativeSimpleForm/> */}
      {/* <FlatListNative/> */}
      {/* <DymanicGrid/> */}
      {/* <SectionListCom/> */}
      {/* <ClassBasedComp/> */}
      {/* <LifeCycleUseEffect/> */}
      {/* <FlexArrangementComp/> */}
      {/* <TouchableHighlightButton/> */}
      {/* <RadioButtonComp/> */}
      {/* <DynamicRadioOption/> */}
      {/* <ActivityIndicatorLoader/> */}
      {/* <ModalDialogBox/> */}
      {/* <PressableComp/> */}
      <StatusBarComp />
      {/* <StackComp/> */}
      {/* <BottomTabNavigatorComp/> */}
      {/* <MaterialBottomTabComp/> */}
      {/* <MaterialTopTab/> */}
      {/* <SimpleFreeApi/> */}
      {/* <PostApiComp/> */}
      {/* <APIListComp/> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HeaderAndProduct" component={HeaderAndProduct} />
          <Stack.Screen name="UserListNavigationRedux" component={UserListNavigationRedux} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App