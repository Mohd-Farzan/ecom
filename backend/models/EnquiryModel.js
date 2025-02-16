const mongoose= require('mongoose')
const userSchema= new mongoose.Schema({
    
    email:{
        type:String
    },
    UserName:{
        type:String,
    },
    phone:{
        type:Number
    },
    message:{
        type:String
    }
},{timestamps:true}
    
);
const enquiryModel=mongoose.model('user',userSchema)
module.exports= enquiryModel