import { logar } from "../controllers/login.js";
import {Router} from "express";

const routerlogin = Router();

//Logar
routerlogin.post("/",logar)

export default routerlogin;