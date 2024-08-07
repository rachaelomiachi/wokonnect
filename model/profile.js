const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(

    {
        image:{
        type:file
    },

    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    skills:{
        type:String,
        required:true
    },

    verify:{
        type:String
    },

    resume:{
       type:String 
    },

    description:{
        type:String,
        required:true
    }

    },

    {timestamps:true}
)

const Profile = mongoose.model("profile", profileSchema)
module.exports = Profile