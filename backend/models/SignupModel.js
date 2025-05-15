const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    email:{
        type:String
    },
    userName:{
        type:String
    },
    role:{
        type:String,
        default:'user'
    },
    password:{
        type:String
    },
},{timestamps:true}
    
);
const signupModel=mongoose.model('users',userSchema)
module.exports= signupModel