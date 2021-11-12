var Maruti = require('../models/Maruti'); 
 
// List of all Marutis 
exports.Maruti_list = async function(req, res) { 
    try{ 
        theMarutis = await Maruti.find(); 
        res.send(theMarutis); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }    
}; 

// VIEWS
// Handle a show all view
exports.Maruti_view_all_Page = async function (req, res) {
    try {
        theMarutis = await Maruti.find();
        res.render("Maruti", {
        title: "Maruti Search Results",
        results: theMarutis,
      });
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };
  

 
// for a specific Maruti. 
exports.Maruti_detail = async function(req, res) { 
    console.log("detail" + req.params.id)
    try {
        result = await Maruti.findById( req.params.id)
        res.send(result)
        }catch (error) {
            res.status(500)
            res.send(`{"error": document for id ${req.params.id} not found`);
            }

     
}; 
  

 
// Handle Maruti delete form on DELETE. 
exports.Maruti_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Maruti delete DELETE ' + req.params.id); 
}; 
 
// Handle Maruti update form on PUT. 
exports.Maruti_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Maruti update PUT' + req.params.id); 
}; 

// Handle Costume create on POST. 
exports.Maruti_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Maruti(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Maruti_type":"goat", "Maruti_model":12, "cost":"large"} 
    document.color = req.body.color; 
    document.quality = req.body.quality; 
    document.Rate = req.body.Rate; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
  
}; 