import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv";
import TodoModel from './Models/Todo.js';

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

const URL =process.env.MONGOURL;
mongoose.connect(URL).then(console.log("DB CONNECTED"))

app.post('/add' , (req,res)=>{
    const task = req.body.task
    TodoModel.create({task:task})
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id' ,(req,res)=>{
    const {id}  = req.params;
    
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id' , (req,res)=>{
    const {id} = req.params
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json.apply(err))
})

app.listen(3001,()=>{
    console.log("server is running" )
})

