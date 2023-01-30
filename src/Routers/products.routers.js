import express from "express";
import getProductById from "../Controllers/getProductById.controller.js";
import getProducts from "../Controllers/getProducts.controller.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;