import { Router } from "express";
import { validateSchema } from "../Middlewares/schemaMiddleware";

const authRouter = Router();

// Routes to auth----------------------------------------------------------------------------------------------//
authRouter.post('/signup', validateSchema(userRegisterSchema) , signUp);