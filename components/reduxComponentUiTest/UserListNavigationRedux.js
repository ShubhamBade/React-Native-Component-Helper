import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserList } from '../../redux/action'

const UserListNavigationRedux = () => {
    const userListArray = useSelector((state) => state.reducer);
    const userList = userListArray.length ? userListArray[0] : [];
    console.warn(userList)

    console.log(userList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserList())
    },[])
    return (
        <View style={{ flex: 1 }}>
            {
                userList.length ?
                    userList.map((item) => {
                        console.log("users names :",item.name);
                        return (
                            <Text style={{ fontSize: 18 }} key={item.id}>{item.name}</Text>
                        );
                    }) :
                    <Text>No Data</Text>
            }
        </View>
    )
}

export default UserListNavigationRedux