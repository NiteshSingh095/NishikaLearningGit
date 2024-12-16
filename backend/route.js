import {Router} from "express";
import { getAllStudent, getStudent, insertStudent, removeStudent } from "./controller.js";


const router = Router();

router.route("/getAllStudent").get(getAllStudent);
router.route("/getStudent").get(getStudent);
router.route("/addStudent").post(insertStudent);
router.route("/deleteStudent/:id").post(removeStudent);

export default router;