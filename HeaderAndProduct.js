import { View, Text,Button } from 'react-native'
import React from 'react'
import HeaderComp from './components/reduxComponentUiTest/HeaderComp'
import ProductComp from './components/reduxComponentUiTest/ProductComp'


const HeaderAndProduct = ({navigation}) => {
    const products = [{
        name: 'POCO M2 Pro',
        price: '20000',
        color: 'Navy Blue'
      },
      {
        name: 'POCO M3 Pro',
        price: '20000',
        color: 'Navy Blue'
      },
      {
        name: 'Mi 11 Pro',
        price: '20000',
        color: 'Navy Blue'
      }
      ]
    return (
        <View style={{flex:1}}>
            <Button title='Move to user List' onPress={()=>{navigation.navigate("UserListNavigationRedux")}}/>
            <HeaderComp />
            <View style={{ flex: 13, backgroundColor: 'pink' }}>
                {products.map((item) =>
                    <ProductComp item={item} key={item.name}/>
                )}
            </View>
        </View>
    )
}

export default HeaderAndProduct