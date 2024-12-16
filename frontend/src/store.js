import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./component/studentSlice"

const store = configureStore({
    reducer : {
        student : studentReducer
    }
})

export default store;