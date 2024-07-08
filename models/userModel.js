const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:[true,"Please add the username"],
    },
    email:{
        type:String,
        require:[true,"Please add an email"],
        unique:[true,"Email adress already taken"],
    },
    password:{
        type:String,
        require:[true,"Please add a password"],
    },
    role: { 
        type: String, 
        enum: ['admin', 'user'], 
        default: 'user' 
    },
},
{
    timestamp:true,
}
);

module.exports=mongoose.model("User",userSchema);