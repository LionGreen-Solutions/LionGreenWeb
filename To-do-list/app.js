const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const routes = require('./routes/todo.js');
const authentication = require('./routes/auth.js');

const app = express();
 
mongoose.connect('mongodb://localhost/todolist', {

})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


app.use(bodyParser.json());

app.use(authentication);

app.use(routes);



app.listen(3000, ()=>{
    console.log("listening for request");
});