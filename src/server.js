import express from "express";
import { connectMongo } from "./utils/connections.js";
import { routerUsers } from "./routes/users.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.listen(8080, ()=>{
    console.log("connect server express!");
})

//liga de la base de datos;
connectMongo();

app.use("/users", routerUsers);