const mongoose = require("mongoose");

const reviewSchema  = new mongoose.Schema({
   image:{type:String ,  required:true},
   stars:{type:Number , min:1 , max:5 , required:true},
   title:{type:String ,  required:true},
   studentsWatched:{type:Number ,  required:true},

},
{
    timestamps:true
});

module.exports  = mongoose.model("Review",reviewSchema);