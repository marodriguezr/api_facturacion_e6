import { Router } from 'express';
import { pizzasRouter } from "./pizzasRouter.js";
import { billsDetailsRouter } from "./billsDetailsRouter.js";
import { billsHeadersRouter } from "./billsHeadersRouter.js";
import { clientsRouter } from "./clientsRouter.js";
import { clientsTypesRouter } from "./clientsTypesRouter.js";
import { paymentsTypesRouter } from "./paymentsTypesRouter.js";

export const facturacionRouter = Router();

facturacionRouter.use("/pizzas", pizzasRouter);
facturacionRouter.use("/billsDetails", billsDetailsRouter);
facturacionRouter.use("/billsHeaders", billsHeadersRouter);
facturacionRouter.use("/clients", clientsRouter);
facturacionRouter.use("/clientsTypes", clientsTypesRouter);
facturacionRouter.use("/paymentsTypes", paymentsTypesRouter);

facturacionRouter.get("/", (req, res) => { res.send("Bienvenido al módulo de facuración los recursos son: billsDetails, billsHeaders, clients, clientsTypes y paymentsTypes.") })