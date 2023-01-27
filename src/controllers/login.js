import bcrypt from "bcrypt";
import { v4 as uuid } from 'uuid';
import db from "../services/database.js";



export default async function logar(req,res) {

    const { email, password } = req.body

    const usuario = await db.collection("usuarios").findOne({ email })

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

}