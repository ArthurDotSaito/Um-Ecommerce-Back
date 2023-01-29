import bcrypt from "bcrypt";
import { v4 as uuid } from 'uuid';
import { getConnection, closeConnection } from "../Services/Database.js";



export default async function logar(req,res) {

    const { email, password } = req.body
    const db = await getConnection();

    try {
        const usuario = await db.collection("users").findOne({ email })

        if (usuario && bcrypt.compareSync(password, usuario.password)) {
            const token = uuid();
    
            await db.collection("sessions").insertOne({
                userId: usuario._id,
                token
            })
            res.status(201).send(token)
        } else {
            return res.status(422).send("email ou senha incorretos")
        }
    } catch (error) {
        console.log("Erro");
        res.status(500).send(error.message);
    }finally{
        await closeConnection();
      }
   

}