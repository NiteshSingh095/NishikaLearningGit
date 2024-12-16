import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./component/studentSlice"

const store = configureStore({
    reducer : {
        student : studentReducer
    }
})
// This is Nitesh Kumar Singh. We are learning git
export default store;
