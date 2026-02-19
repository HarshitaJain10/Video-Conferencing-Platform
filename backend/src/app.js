import express from "express";
import {createServer} from "node:http";  //express-instance connect socket-servewr
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import {connecttoSocket} from "./controllers/socketManagers.js";

import userRoutes from "./routes/users.routes.js";
const app=express();
const server=createServer(app);
const io=connecttoSocket(server);

//local storage
app.set("port",(process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

//updation
app.use("/api/v1/users",userRoutes);



const start=async()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://VideoChat:video123@videoconferencing.8wiyv7m.mongodb.net/")
    console.log(`mongo connected db host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("listen");
    });
}
start();