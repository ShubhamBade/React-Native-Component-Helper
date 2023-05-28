import { View, Text,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addToCart,removeFromCart } from '../../redux/action';
import { useDispatch,useSelector } from 'react-redux';

const ProductComp = (props) => {
    const item=props.item;
    const dispatch = useDispatch();
    const cartItem=useSelector((state)=>state.reducer);

    const[isAdded,setIsAdded]=useState(true);

    const handleAddToCart=(item)=>{
        //console.warn("Added" ,item);
        dispatch(addToCart(item))
    }
    const handleRemoveFRomCart=(item)=>{
        //console.warn(item);
        dispatch(removeFromCart(item.name))
    }
    useEffect(()=>{
        let result=cartItem.filter(element=>{
            return element.name===item.name
        })
        if(result.length){
            setIsAdded(false)
        }else{
            setIsAdded(true)
        }
    },[cartItem])
    return (
        <View key={item.name} style={{ alignItems: 'center', margin: 20 }}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <Text style={{ fontSize: 18 }}>{item.price}</Text>
            <Text style={{ fontSize: 18 }}>{item.color}</Text>
            <Button title={isAdded?'Add To Cart':"Remove from Cart"} onPress={()=>{isAdded?handleAddToCart(item):handleRemoveFRomCart(item)}} />
        </View>
    )
}

export default ProductComp