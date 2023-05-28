import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const HeaderComp = () => {
const cartData=useSelector((state)=>state.reducer)
console.warn(cartData);

const [cartItems,setCartItems]=useState(null);

useEffect(()=>{
 setCartItems(cartData.length);
},[cartData])
  return (
    <View style={{flex:1,backgroundColor:'orange',justifyContent:'center'}}>
      <Text style={{color:"#fff",fontSize:20,textAlign:'right',marginRight:25}}>count :{cartItems}</Text>
    </View>
  )
}

export default HeaderComp