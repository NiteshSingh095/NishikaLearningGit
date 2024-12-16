
import { app } from "./app.js";
import { connectDB } from "./database.js";
import dotenv from "dotenv";

dotenv.config();

connectDB().then(()=>{
    console.log("db connection sucesfully");
}).catch((err)=>{
    console.log("db connection failed" ,err);
});

app.listen(process.env.PORT || 8000 , ()=>{
    console.log(`server is listening on port : ${process.env.PORT}`)
})
