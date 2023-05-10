import { View, Text, SectionList } from 'react-native'
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

const App = () => {
  useEffect(()=>{
    console.log("hello")
  },[])
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:30,textAlign:'center', color:"blue",marginTop:10,fontWeight:"bold"}}>
        First React Native Application
      </Text>
      <Text style={{backgroundColor:"black",color:"white",textAlign:"center",margin:3}}>
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
      <ModalDialogBox/>
    </View>
  )
}

export default App