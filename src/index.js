import express from 'express';
import {routes} from "./routes/index.js";

const PORT = process.env.PORT || 4000

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);
  
app.listen(PORT,() => {
    console.log(`Listening on: ${PORT}`);
})