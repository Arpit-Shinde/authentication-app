const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({ //mongoose.Schema is class, so to create instance, we use "new" keyword
    username:{
        type:String,
        required:true
    }, 
    email:{
        type:String, 
        required:true,
        unique:true //no other data in db should match with this. (B-Tree search) 
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("User", userSchema) //create a model and export it