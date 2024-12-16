import {createSlice, nanoid} from "@reduxjs/toolkit"
import { fetchStudentData } from "./FetchingData";



const studentSlice = createSlice({
    name : "student" ,
    initialState : {
        list : [],
        loading : false,
        error : null
    },
        reducers :{
            addStudent : (state,action)=>{
                state.list.push({
                   ...action.payload
                });
            },
            deletestudent : (state,action)=>{
                state.list = state.list.filter((x)=> x.id !== action.payload)

            }

        },
        extraReducers : (builder)=>{
            builder.addCase(fetchStudentData.pending , (state)=>{
                state.loading = true;
                state.error = null
            }).addCase(fetchStudentData.fulfilled, (state,action)=>{
                state.loading = false;
                state.list = action.payload;

            }).addCase(fetchStudentData.rejected , (state,action)=>{
                state.loading = false;
                state.error = action.error.message
            })

        }

    }
);

export const {addStudent ,deletestudent} = studentSlice.actions;
export default studentSlice.reducer;
 