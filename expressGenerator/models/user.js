const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    isActivated:{
        type:Boolean,
        default:false
    },
    activationToken:String
})
const model=mongoose.model('datasses',schema)
module.exports=model;