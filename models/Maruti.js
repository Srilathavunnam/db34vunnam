const mongoose = require("mongoose") 
const MarutiSchema = mongoose.Schema({ 
color: String, 
quality: String, 
Rate: Number 
}) 
 
module.exports = mongoose.model("Maruti",MarutiSchema) 
