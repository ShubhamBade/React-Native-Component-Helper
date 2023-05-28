import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import createSagaMiddleware from "redux-saga" ///saga import
import SagaData from "./saga";

const sagaMiddleware=createSagaMiddleware();

const store=configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]//register saga
})
sagaMiddleware.run(SagaData)//run saga file

export default store;