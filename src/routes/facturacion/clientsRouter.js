import { Router } from "express";
import {getAllClients,createNewClients,updateAClient,deleteAClient} from "../../controllers/facturacion/clientsController.js";

export const clientsRouter = Router();

clientsRouter.get('/ConsultaClientes', getAllClients);
clientsRouter.post('/crearNuevoCliente', createNewClients);
clientsRouter.put('/actualizarCliente/:cli_id', updateAClient);
clientsRouter.delete('/EliminarCliente/:cli_id',deleteAClient);


