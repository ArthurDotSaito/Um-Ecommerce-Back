import { getConnection, closeConnection } from "../Services/Database.js";

async function getProducts(_, res) {
  try {
    const db = await getConnection();
    const products = await db
      .collection("products")
      .find({})
      .sort({ score: -1 })
      .toArray();
    res.status(200).send(products);
  } catch (e) {
    res
      .status(500)
      .send(`Algo de errado ocorreu na solicitação dos produtos: ${e}`);
  } finally {
    await closeConnection();
  }
}

export default getProducts;
