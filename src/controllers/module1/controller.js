import {pool as db} from "../db/connection.js";

export const getAllPizzas = async (req, res) => {
    const dbResponse = await db.query(`select * from pizzas p order by p.id desc;`);
    res.json(dbResponse.rows);    
}