import {Router} from 'express';
import {facturacionRouter} from "./facturacion/index.js";

export const routes = Router();

routes.use("/facturacion", facturacionRouter);
routes.get("/", (req,res) => {res.send("Bienvenido")})