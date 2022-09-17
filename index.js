const express = require('express')
const mongoose = require('mongoose')
const route = require('./src/route')
const app = express()
require('dotenv').config()

app.use(express.json())

mongoose.connect(process.env.MONGO_CLUSTER,{
    useNewUrlParser:true
})
.then(()=>console.log('Connected to MongoDB Database'))
.catch(err => console.log(`Error-Connecting to DB${err}`));

app.use('/',route)

app.use(function (req, res) {
    var err = new Error('Not Found');

    return res.status(400).send({status : false, msg : "path not found"})
    });


app.listen(process.env.PORT ,()=>console.log(`Server listing to  ${process.env.PORT}`))