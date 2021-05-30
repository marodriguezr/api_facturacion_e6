import { Router } from "express";

export const pizzasRouter = Router();

pizzasRouter.get('/',(req,res) => {
    res.send('Bienvenido a pizzas');
});