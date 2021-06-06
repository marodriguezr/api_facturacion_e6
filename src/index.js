import express from 'express';
import {routes} from "./routes/index.js";
import cors from "cors";

const PORT = process.env.PORT || 4000

const app = express();
app.use(cors())
=======

app.use(cors({origin: "*"}))
>>>>>>> 545dbee2b5f21d5857c3a0367179f186e3f2b83a
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);
  
app.listen(PORT,() => {
    console.log(`Listening on: ${PORT}`);
})