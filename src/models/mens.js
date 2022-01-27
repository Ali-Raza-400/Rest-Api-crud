const mongoose =require('mongoose');

const mySchema =new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type :String,
        required:true,
        trime:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true,
    },
    event:{
        type:String,
        default:"100"
    }
})
const MenRanking =new mongoose.model("MenRanking",mySchema);
module.exports=MenRanking;