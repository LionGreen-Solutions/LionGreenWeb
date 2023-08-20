const express  = require('express');
const routes= require('./api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise=global.Promise;


app.use(bodyParser.json());
 

app.use('/api',routes);

app.use(function(err,res,req,next){
    res.status(422).send({error: err.message});
});


 

app.listen(process.env.port || 3000,function(){
    console.log("listening for request");
});
