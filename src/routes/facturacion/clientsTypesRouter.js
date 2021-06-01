import { Router } from "express";
import {getAllClientsTypes, createClientType, deleteClientType, updateClientType} from "../../controllers/facturacion/clientsTypesController.js";
import clientsTypes from "../../model/clientsTypes.js";

export const clientsTypesRouter = Router();

//clientsTypesRouter.get('/', (req, res) => { res.send("Manejo de tipos de clientes.") })
clientsTypesRouter.get('/',getAllClientsTypes)
clientsTypesRouter.post('/',createClientType)
clientsTypesRouter.delete('/',deleteClientType)
clientsTypesRouter.put('/',updateClientType)

