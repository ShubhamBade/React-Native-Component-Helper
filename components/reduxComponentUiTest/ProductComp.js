import { View, Text,Button } from 'react-native'
import React from 'react'
import { addToCart } from '../../redux/action';
import { useDispatch } from 'react-redux';

const ProductComp = (props) => {
    const item=props.item;
    const dispatch = useDispatch();

    const handleAddToCart=(item)=>{
        //console.warn("Added" ,item);
        dispatch(addToCart(item))
    }
    return (
        <View key={item.name} style={{ alignItems: 'center', margin: 20 }}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <Text style={{ fontSize: 18 }}>{item.price}</Text>
            <Text style={{ fontSize: 18 }}>{item.color}</Text>
            <Button title='Add to Cart' onPress={()=>{handleAddToCart(item)}} />
        </View>
    )
}

export default ProductComp