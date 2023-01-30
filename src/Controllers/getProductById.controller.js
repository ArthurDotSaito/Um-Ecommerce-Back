import { ObjectId } from "mongodb";
import { closeConnection, getConnection } from "../Services/Database.js";

async function getProductById(req, res) {
  const idProduct = req.params.id;
  console.log("GetProductsByID");

  try {
    console.log(idProduct)
    const db = await getConnection();
    const product = await db.collection("products").findOne({_id: ObjectId(idProduct)});
    console.log(product)
    res.status(200).send(product);
  } catch (e) {
    console.log("Algo deu errado aqui! Back-end GetProductByID")
    res.status(500).send(`Algo deu errado na busca de produto por id: ${e}`);
  }
}

export default getProductById;
