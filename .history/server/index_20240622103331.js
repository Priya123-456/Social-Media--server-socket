import express from "express"
//import Connection from "./Database/db.js";
import Route from "./routers/route.js";
import cors from "cors";
import bodyParser from "body-parser"

const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Route);
//Connection();
PORT
app.listen(PORT,()=> console.log(`server is running sucessfully on PORT ${PORT}`))