import {Router} from 'express';
import {module1Router} from "./module1/index.js";

export const routes = Router();

routes.use("/module1", module1Router);
routes.get("/", (req,res) => {res.send("Welcome")})