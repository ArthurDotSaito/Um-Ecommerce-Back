import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();


    const mongoClient = new MongoClient(process.env.DATABASE_URL);
    let db;


    try {
        await mongoClient.connect()
        db = mongoClient.db()

    } catch (error) {
        console.error(error)
        console.log("Erro ao conectar no banco de dados")

    }

    export default db;


    export function closedb(){
        const close = mongoClient.close()
        return close;
    }
