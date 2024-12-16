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
    }
});

export const User = mongoose.model("User" , userSchema);