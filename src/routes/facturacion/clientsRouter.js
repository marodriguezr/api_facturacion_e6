import { Router } from "express";
import {getAllClients,getAllClientsByActivos,getAllClientsById,createNewClients,updateAClient,deleteAClient} from "../../controllers/facturacion/clientsController.js";

export const clientsRouter = Router();

clientsRouter.get('/getAll', getAllClients);
clientsRouter.get('/getById/:cli_id', getAllClientsById);
clientsRouter.get('/getByActivos', getAllClientsByActivos);
clientsRouter.post('/crearNuevoCliente', createNewClients);
clientsRouter.put('/actualizarCliente/:cli_id', updateAClient);
clientsRouter.delete('/EliminarCliente/:cli_id',deleteAClient);


