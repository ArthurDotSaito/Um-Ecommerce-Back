import { Router } from "express";
import { signUp } from "../Controllers/AuthSignUp.js";
import { validateSchema } from "../Middlewares/schemaMiddleware.js";
import { userRegisterSchema } from "../Schemas/userRegisterSchema.js";

const authRouter = Router();

// Routes to auth----------------------------------------------------------------------------------------------//
console.log("Hello There!")
authRouter.post('/signup', validateSchema(userRegisterSchema) , signUp);

export default authRouter;