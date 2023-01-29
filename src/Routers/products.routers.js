import express from "express";
import getProducts from "../Controllers/getProducts.controller.js";
const router = express.Router();

router.get("/", getProducts);

export default router;