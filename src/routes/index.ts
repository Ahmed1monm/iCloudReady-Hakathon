import { Router } from "express";
import campaignRouter from "./campaign";
import additionalInputRouter from "./additional-inputs";
import dashboardRouter from "./dashboard";

const v1Router = Router()

v1Router.use("/campaign", campaignRouter);
v1Router.use("/additional-inputs", additionalInputRouter);
v1Router.use("/dashboard", dashboardRouter);

export default v1Router;
