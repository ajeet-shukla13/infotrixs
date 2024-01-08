const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const connectDB=require("./db/connect");

const quotes_routes=require('./routes/quote');

const Quote = require('./models/quote');

app.use(bodyParser.json());

app.use("/",quotes_routes);

const start=async()=>{
    try{
       await connectDB();
       app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    }
    catch(err){
        console.log(error);
    }
}

start();