const Maruti = require("../models/Maruti");

// API for our resources 
exports.api = function(req, res) { 
    res.write('['); 
    res.write('{"resource":"Marutis", '); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
}; 
  // for a specific Costume.
  exports.Maruti_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Maruti.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };