import { Router } from "express";
import {getAllPaymentsTypes,createPaymentsType,updatePaymentsType,deletePaymentsType} from "../../controllers/facturacion/paymentsTypesController.js";

export const paymentsTypesRouter = Router();

paymentsTypesRouter.get('/', getAllPaymentsTypes)
paymentsTypesRouter.post('/', createPaymentsType)
paymentsTypesRouter.put('/', updatePaymentsType)
paymentsTypesRouter.delete('/', deletePaymentsType)
