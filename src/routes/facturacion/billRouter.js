import { Router } from "express";

export const billsRouter = Router();

billsRouter.get('/', (req, res) => {res.send("Bills")});