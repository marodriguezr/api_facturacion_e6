import {Router} from 'express';
import {pizzasRouter} from "./pizzasRouter.js";

export const module1Router = Router();

module1Router.use("/pizzas", pizzasRouter);
module1Router.get("/", (req,res) => {res.send("Mo1")})