import { Router } from "express";
import * as pizzaController from "../controllers/pizza.controller.js";

export const routes = Router();

routes.get('/',(req,res) => {
    res.send('Bienvenido');
});

routes.get("/pizzas", pizzaController.getAllPizzas);