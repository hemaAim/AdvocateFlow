
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import path from "node:path";
import { buildSchema } from "type-graphql";


import mongoose from "mongoose";

import dotenv from "dotenv";

import { app } from "./app";
import { CustomerResolver } from "../resolvers/CreateCustumer-resolver";

dotenv.config();

const PORT = process.env.PORT || "9090";
const MONGODB_URI =
  "mongodb+srv://aimhema:sslbhwoFiR4urulb@cluster0.rade5m2.mongodb.net/";
  

//jKRZqsgdTqdH33Hc aimhema77
//sslbhwoFiR4urulb aimhema

// async function bootstrap() {
//   const schema = await buildSchema({
//     resolvers: [CustomerResolver],
//     emitSchemaFile: path.resolve(__dirname, "schema.gql"),
//   });
//   const server = new ApolloServer({
//     schema,
//   });

//   const { url } = await server.listen();

//   console.log(`🚀 HTTP server runing on :${url}`);
// }

//bootstrap();

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

startServer();

//mongodb+srv://aimhema:<password>@cluster0.c2myzzf.mongodb.net/?retryWrites=true&w=majority
