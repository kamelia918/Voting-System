const mongoose=require("mongoose");

const candidateSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true],
    },
    age:{
        type:Number,
        require:[true],
    },
    VotingPoint:{
        type:Number,
        require:[true],
        default:0,
    },
    CurrentPosition:{
        type:String,
        require:[true],
    },
    Goals:{
        type:String,
        require:[true],
    },
},
{
    timestramps:true,
},
);

module.exports=mongoose.model("Candidate",candidateSchema);