import { USER_LIST,SET_USER_DATA } from "./constants";
import {takeEvery,put} from "redux-saga/effects"


function* userList(){
    const url="https://jsonplaceholder.typicode.com/users";
    let data=yield fetch(url);
    data=yield data.json();
    console.log("Data  in Saga",data)
    yield put({type:SET_USER_DATA,data})
}
export default function* SagaData(){
    yield takeEvery(USER_LIST,userList);
}