import mongoose , {Schema} from "mongoose";

const userSchema = new Schema ({
    name :{
        type : "String",
        required : true
    },
    email: {
        type : "String",
        required : true
    },
    // this time use git pull to fetch and rebae at same time
    password : {
        type : "String",
        required : true
    },
    qualification : {
        type :"String",
        required : true
    } , 
    age : {
        type:Number , 
        required : false
    },
    identification : {
        type : "String",
        required : false
    },
    salary : {
        type : "String" ,
        required : false ,
    }, 
    phonenumber : {
        type : Number , 
        required : false
    }
});

export const User = mongoose.model("User" , userSchema);
