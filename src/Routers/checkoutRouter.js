import { Router } from "express";
import { checkout } from "../Controllers/Checkout.js";

const checkoutRouter = Router();

// Routes to auth----------------------------------------------------------------------------------------------//
checkoutRouter.post('/checkout', checkout);

export default checkoutRouter;