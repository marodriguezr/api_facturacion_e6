import express from 'express';
import {routes} from "./routes/index.js";
import { env } from "./config/env.js"

const PORT = env.parsed.PORT || 5000

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);
  
app.listen(PORT,() => {
    console.log(`Listening on: ${PORT}`);
})