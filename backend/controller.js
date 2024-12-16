import {User} from "./model.js";

const getAllStudent  =async (req,res)=>{
    try{
        const Allstudent = await User.find();
        if(!Allstudent){
            res.status(400).json({
                success :false , message : "failed to get all student data"
            })
        }
        res.status(200).json({
            success : true , Allstudent , message :"fetch student detail successfully!!"
        })

    }catch(err){
        res.status(400).json({
            success :false , message : "couldnot get all student data"
        })
    }
}
const getStudent = async(req,res)=>{
    try{
        const student = await User.findById(req.params._id);
        if(!student){
            res.status(400).json({
                success :false , message : "failed to get student data"
            })
        }
        res.status(200).json({
            success : true , student , message :"fetch student detail successfully!!"
        })
        

    }catch(err){
        res.status(400).json({
            success :false , message : "failed to fetch  student data"
        })
    }
}
const insertStudent =async(req ,res)=>{
    try{
        const student = await User.create(req.body);
        if(!student){
            res.status(400).json({
                success :false , message : "failed to add student data"
            })
        }
        res.status(200).json({
            success : true , student , message :"student add successfully" })

    }catch(err){
        res.status(400).json({
            success :false , message : "failed to  add student data"
        })
    }
}
const removeStudent = async(req,res)=>{
    console.log(req.params);
    try{
        const student = await User.findByIdAndDelete(req.params.id);
        if(!student){
           res.status(400).json(
            {success : false , message: "fail to get student detail form db"}

            )
        }
       res.status(200).json({
       success : true , student , message :"student data deleted"
       });
       

    }catch(err){
        res.status(400).json({
            success :false , message : "failed to delete student data"
        })
    }
}
export { getAllStudent ,getStudent,
   insertStudent,removeStudent
 };