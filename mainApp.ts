import express, { Application } from "express";
import cors from "cors";
import user from './router/authRouter'
import task from "./router/taskRouter"

export const mainApp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
   

    .use("/api", user)
    .use("/api", task)
};
