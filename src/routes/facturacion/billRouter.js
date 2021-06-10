import { Router } from "express";
import { getbillbyPayments } from "../../controllers/facturacion/billsController.js";
import { getbillbyProductId } from "../../controllers/facturacion/billsController.js";
import { getCurrentWritableBillCode } from "../../controllers/facturacion/billsController.js";
import { getLastBill } from "../../controllers/facturacion/billsController.js";
import { getById } from "../../controllers/facturacion/billsController.js";

export const billsRouter = Router();

billsRouter.get('/', (req, res) => { res.send("Bills") });
billsRouter.get('/byPaymentAndClientId', getbillbyPayments);
billsRouter.get('/byProductId', getbillbyProductId);
billsRouter.get('/current', getbillbyProductId);
billsRouter.get('/currentWritableBillCode', getCurrentWritableBillCode)
billsRouter.get('/last', getLastBill);
billsRouter.get('/byId', getById);