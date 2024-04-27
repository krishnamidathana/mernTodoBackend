import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    task:String ,
    done:{
        type:Boolean,
        default:false
    }
})

const TodoModel = mongoose.model("todolist" ,TodoSchema)

export default TodoModel;