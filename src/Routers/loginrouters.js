import  logar from "../Controllers/login.js"
import {Router} from "express";

const routerlogin = Router();

//Logar
routerlogin.post("/",logar)

export default routerlogin;