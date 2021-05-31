import { Router } from "express";
import {getAllClients} from "../../controllers/module1/controller.js";

export const clientsTypesRouter = Router();

clientsTypesRouter.get('/', getAllClients);