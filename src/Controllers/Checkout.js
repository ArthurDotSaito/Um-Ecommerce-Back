import { getConnection, closeConnection } from "../Services/Database.js";

export async function checkout(req, res) {
    const checkout = req.body;
    const db = await getConnection();

    console.log(checkout)

    try {    
        console.log("Tentei realizar o checkout");

        await db.collection("checkout").insertOne({checkout});

        res.status(201).send("CheckOut realizado com sucesso!");
        console.log("CheckOut Feito!");
    }catch (error) {
        console.log("Erro no checkout - back");
        res.status(500).send(error.message);
    }finally{
      await closeConnection();
    }
  }
  