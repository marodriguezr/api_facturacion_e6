import { Router } from "express";
import {getAllClients} from "../../controllers/module1/controller.js";

export const pizzasRouter = Router();

pizzasRouter.get('/', getAllClients);