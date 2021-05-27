import express from 'express';
import {routes} from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);
  
const PORT = 4000;
  
app.listen(PORT,() => {
    console.log(`Listening on: http://localhost:${PORT}/`);
})