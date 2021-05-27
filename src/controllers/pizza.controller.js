import {db} from "../db/connection.js";

export const getAllPizzas = async (req, res) => {
    const dbResponse = await db.any(`select * from pizzas p order by p.id desc;`);
    res.json(dbResponse);    
}