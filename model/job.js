const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema(

    {
      title:{
        type: String,
        required: true

      },
      state:{
        type: String,
      },
      address:{
        type:String,
      }
      ,
      description:{
        type:String,
        required: true
      }


    },

    {timestamps:true}


)

const Employ = mongoose.model("jobs", employerSchema)
module.exports = Employ