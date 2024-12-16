import { useContext, useDeferredValue, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./studentSlice";
import { themeContext } from "./Account";
import { adddbstudent } from "./FetchingData";
const StudentForm = ()=>{

    const [userData ,setData ] = useState({
        name : "",
        email : "",
        password : "",
        qualification : ""
    });
    const {setToggle ,theme,setTheme} = useContext(themeContext);

    
    const dispatch = useDispatch();

    useEffect(()=>{
       
    },[dispatch]);

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        dispatch(addStudent(userData));
        dispatch(adddbstudent(userData));
    }
    const handleInputData = (e)=>{
        const {name , value} = e.target;
        setData({
            ...userData, [name]:value
        })

    }

    const handleTheme =()=>{

        if(theme === "dark"){
            setToggle(false);
            setTheme("light");
        }
        else{
            setToggle(true);
            setTheme("dark");
        }

        
    }
    return <div className="   w-[200px]  flex justify-center  bg-fuchsia-400 mx-auto px-64 py-12 rounded-md"
    style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
       <div>
       <button className= "px-3 py-5  mx-auto rounded-full "
        style ={{backgroundColor:theme === "light" ? "#fff" : "#333" , 
            color:theme === "light" ? "#000" : "#fff"}}
       onClick ={()=>handleTheme()}>Dark</button>
       </div>
        <form onSubmit={handleFormSubmit}>
           <div className="flex flex-col justify-center px-24 py-14">
          <div >
          <label>Name:</label>
          <input  name ="name" value={userData.name} className="px-10 py-5 rounded-md"type="text"
          onChange={(e)=>handleInputData(e)} />
          </div>
           <div>
           <label>Email:</label>
           <input name="email" value={userData.email} className="px-10 py-5 rounded-md" type="email" 
            onChange={(e)=>handleInputData(e)}/> 
           </div>
           <div>
           <label>Password:</label>
           <input name="password" value={userData.password} className="px-10 py-5 rounded-md" type="password" 
            onChange={(e)=>handleInputData(e)}/>
           </div>
           <div>
           <label>Qualification:</label>
           <input  name="qualification" value= {userData.qualification } className="px-10 py-5 rounded-md"type="text"
            onChange={(e)=>handleInputData(e)} />
           </div>
            <button type="submit" className="bg-stone-800 text-slate-200 px-4 py-3  rounded-md mt-5">Submit</button>
           </div>
        </form>
         </div>
}
export default StudentForm