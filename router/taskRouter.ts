import express, { Router } from "express";
import { createTask, getTask } from "../controller/taskController";


const router = Router();


router.route("/:userID/create-task").post( createTask);

router.route("/get-task").get( getTask);




export default router;
