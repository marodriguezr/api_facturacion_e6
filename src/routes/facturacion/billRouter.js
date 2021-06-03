import { Router } from "express";
import {getbillbyPayments} from "../../controllers/facturacion/billsController.js";
import {getbillbyProductId} from "../../controllers/facturacion/billsController.js";

export const billsRouter = Router();

billsRouter.get('/', (req, res) => {res.send("Bills")});
billsRouter.get('/byPaymentAndClientId', getbillbyPayments);
billsRouter.get('/byProductId', getbillbyProductId);