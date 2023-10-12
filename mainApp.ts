import express, { Application } from "express";
import cors from "cors";
import user from '../ToDoBE/router/authRouter'
import task from "../ToDoBE/router/taskRouter"

export const mainApp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
   

    .use("/api", user)
    .use("/api", task)
};
