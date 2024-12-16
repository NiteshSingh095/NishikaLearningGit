import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchStudentData = createAsyncThunk(
    "fetch/studentData" , async()=>{
       try{
        const response = await fetch("https://empnit-backend.onrender.com/api/v1/student/getAllStudent");
        const data = await response.json();
        return data.Allstudent || [];


       }catch(err){
        console.log("failed to fetch data" , err);
        return null;
       }

        
    }
);

export const deletingdbstudent = createAsyncThunk(
    "delete/studentdata" , async(id)=>{
      try{
        const response = await fetch(`https://empnit-backend.onrender.com/api/v1/student/deleteStudent/${id}`,{
            method : "POST"
        }
        );
        const data = await response.json();
        return data.student;
       

      }catch(err){
        console.log("failed to deleted data " ,err);
      }

    }
);

export const adddbstudent = createAsyncThunk("add/student" , async(userData)=>{
    try{
        const response = await fetch("https://empnit-backend.onrender.com/api/v1/student/addStudent",{
            method : "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body : JSON.stringify(userData)
        });
        if(!response){
            console.log("no response to add elem");

        }
        const data = await response.json();
        return data.student;

    }catch(err){
        console.log("failed to add deleted data");
    }
    })
