
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import { deletestudent } from "./studentSlice";
import { fetchStudentData } from "./FetchingData";
import { deletingdbstudent} from "./FetchingData";
const DisplayList = ()=>{
    const dispatch = useDispatch();
    const studentDetails = useSelector((store)=>store.student.list);
    const [student ,setStudent] = useState(studentDetails);
   
  
    useEffect(()=>{
        setStudent(studentDetails);
    },[studentDetails])

    useEffect(()=>{
        dispatch(fetchStudentData())
    },[dispatch])

    const handleDelete = (index)=>{
        setStudent((prev)=> prev.filter((x)=> x._id !== index));
        dispatch(deletestudent(index));
        dispatch(deletingdbstudent(index));

    }
    return <div className=" w-[800px] flex  flex-col flex-wrap  justify-center bg-fuchsia-400 mx-auto  rounded-md mt-11 ">
        {
                student.length === 0 ? <div>"No Student Data Available "</div> : (
                    student.map((items ) =>{ 
                        
                        return <div key={items._id} className="px-3 py-4 flex justify-evenly" >
                            <div >
                            <span>
                                {items.name}
                            </span>
                            <span>
                                {items.email}
                            </span>
                            <span>
                                {items.qualification}
                            </span> 
                          
                         <button onClick={()=>handleDelete(items._id)}>
                                Delete
                            </button>
                      
                            </div>
                       
                            
    
    
                        </div>
                    })
                )
              }
            
           
            
    </div>
}

export default DisplayList;