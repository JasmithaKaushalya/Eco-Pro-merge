const mongoose =require("mongoose");

const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    location:{
        type:String,
        required:true,
        enum:["western",
              "central",
              "southern",
              "northern",
              "eastern",
              "northwestern",
              "northcentral",
              "uva",
              "sabaragamuwa"
        ]
    }
    
},
    {timestamps:true}
);
module.exports=mongoose.model.user || mongoose.model("user",userschema);