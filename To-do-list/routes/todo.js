const express = require('express');
const Task = require('../models/task.js');

const router = express.Router();
// getting all list of tasks 
router.get('/todo', async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(error){
        res.status(500).json({ error: 'error!' });
    }
    
});

//getting a task by id 
router.get('/todo/:taskid',async (req,res)=>{
  try{
    const tasks = await Task.findById(req.params.taskid);
    if(!tasks){
      res.status(404).json({error: 'task not found'});
    }
    res.json(tasks);
  }catch(error){
    res.status(500).json({error: 'error!'});
  }
});



//getting a task by title 
// routes.get('/todo/:title', async(req,res)=>{
//   try{
//     const tasks = await Task.findOne({title: req.params.title});
//     if(!tasks){
//       res.status(404).json({error:'task not found'});
//     }
//     res.json(tasks);
//   }catch(error){
//     res.status(500).json({error: 'error'});
//   }
// });

// //getting imporatnt tasks

// routes.get('/todo/:important', async (req,res)=>{
//   try{
//     const tasks =await Task.find({IsImportant:true});
//     res.json(tasks);
//   }catch(error){
//     res.status(500).json({error: 'error'});
//   }
// });



// creating new task
router.post('/todo', (req,res)=>{
    try {
        const tasks = new Task(req.body);
        tasks.save();
        res.status(201).json(tasks);
      } catch (error) {
        res.status(500).json({ error: 'error!' });
      }
});

//updating a task
router.put('/todo/:taskid', async (req,res)=>{
  try{
    const tasks = await Task
    .findByIdAndUpdate(req.params.taskid, req.body,);
    if(!tasks){
      res.status(404).json({error: 'task not found'});
    }
    res.json(tasks);
  }catch{
    res.status(500).json({error: 'error!'});
  }
});

router.delete('/todo/:taskid', async (req,res)=>{
  try{
    const tasks = await Task.findByIdAndDelete(req.params.taskid);
    if(!tasks){
      res.status(404).json({error: 'task not found'});
    }
    res.json({message: 'task deleted'});
  }catch{
    res.status(500).json({error: 'error!'});
  }
});

module.exports = router;