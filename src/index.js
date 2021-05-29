import express from 'express';
import {routes} from "./routes/index.js";
import { env } from "./config/env.js"

const PORT = process.env.PORT || env.parsed.PORT

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);
  
app.listen(PORT,() => {
    console.log(`Listening on: ${PORT}`);
})