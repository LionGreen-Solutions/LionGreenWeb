const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    descrption: String,
    due_date:{
        type: Date,
        default: Date.now
    } ,
    status: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;