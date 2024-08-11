import express from "express";
import cors from "cors";
import { router } from "./router";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";



const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(authenticationMiddleware);

export { app };

//Gg5USwilVAqDoSdy 

//mongodb+srv://aimhema:<password>@cluster0.c2myzzf.mongodb.net/?retryWrites=true&w=majority