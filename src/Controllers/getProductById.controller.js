import { ObjectId } from "mongodb";
import { closeConnection, getConnection } from "../Services/Database.js";

async function getProductById(req, res) {
  const idProduct = req.params.id;

  try {
    const db = await getConnection();
    const product = await db.collection("products").findOne({_id: ObjectId(idProduct)});
    res.status(200).send(product);
  } catch (e) {
    res.status(500).send(`Algo deu errado na busca de produto por id: ${e}`);
  } finally {
    await closeConnection();
  }
}

export default getProductById;
