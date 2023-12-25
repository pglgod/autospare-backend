
const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURI = process.env.MONGO_URI;
const mongoURI = "mongodb+srv://pglgod:pglgod@cluster0.ydaxyl8.mongodb.net/?retryWrites=true&w=majority";


const connectTOMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log('connected to mongoDB')
    }).catch((err)=>{
        console.log("Failed to connect")
    })
}


module.exports = connectTOMongo;