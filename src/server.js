
import routerlogin from "./Routers/loginrouters.js";
import express from "express";
import cors from "cors";
import productsRouters from "./Routers/products.routers.js";
import authRouter from './Routers/AuthRoutes.js'


// General  ---------------------------------------------------------------------------//

const server = express();
server.use(express.json());
server.use(cors());

const PORT = Number(process.env.PORT) || 5000;
server.use(authRouter)

// Server Response ------------------------------------------------------------------------//
server.use("/products", productsRouters);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
