import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME=process.env.DB_USERNAME;

const PASSWORD=process.env.DB_PASSWORD;


const Connection= async ()=>{


   // const URL='mongodb://rajputpriyyyyyaa:pr566677766776677@ac-cjyimom-shard-00-00.1jbs3nn.mongodb.net:27017,ac-cjyimom-shard-00-01.1jbs3nn.mongodb.net:27017,ac-cjyimom-shard-00-02.1jbs3nn.mongodb.net:27017/?ssl=true&replicaSet=atlas-f0xcr9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
    try{

     await   mongoose.connect(URL,{useUnifiedTopology:true})

     console.log("database connected successfully");


    }catch(error){
        console.log("error while connecting with the database",error.message);

    }

    
}
export default Connection