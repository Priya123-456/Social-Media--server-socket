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
const axios = require('axios');
let data = JSON.stringify({
  "data": {
    "slices": [
      {
        "origin": "NYC",
        "destination": "ATL",
        "departure_date": "2024-06-21"
      },
      {
        "origin": "ATL",
        "destination": "NYC",
        "departure_date": "2024-07-21"
      }
    ],
    "passengers": [
      {
        "type": "adult"
      }
    ],
    "cabin_class": "business"
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.duffel.com/air/offer_requests',
  headers: { 
    'Accept-Encoding': 'gzip', 
    'Accept': 'application/json', 
    'Duffel-Version': 'v1', 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer duffel_test_1EmVBdf6vPTYidyfaaKUZKcCIcKP8fKAy0Gxup_TN0f'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

const PORT=8000;
app.listen(PORT,()=> console.log(`server is running sucessfully on PORT ${PORT}`))