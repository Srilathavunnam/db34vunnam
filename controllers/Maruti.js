var Maruti = require('../models/Maruti');
// List of all Marutis
exports.Maruti_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Maruti list');
};
// for a specific Maruti.
// for a specific Maruti.
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
// Handle Maruti create on POST.
exports.Maruti_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Maruti();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Maruti_type":"regular", "quantity":13, "cost":43.56}
    document.color = req.body.color;
    document.quality = req.body.quality;
    document.Rate = req.body.Rate;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Maruti delete on DELETE.
exports.Maruti_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Maruti.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Maruti update form on PUT.
exports.Maruti_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Maruti.findById( req.params.id)
 // Do updates of properties
 if(req.body.color)
 toUpdate.color = req.body.color;
 if(req.body.quality) toUpdate.quality = req.body.quality;
 if(req.body.Rate) toUpdate.Rate = req.body.Rate;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all Marutis
exports.Maruti_list = async function (req, res) {
    try {
        theMaruti = await Maruti.find();
        res.send(theMaruti);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.Maruti_view_all_Page = async function (req, res) {
    try {
        theMaruti = await Maruti.find();
        res.render('Maruti', {
            title: 'Maruti Search Results',
            results: theMaruti
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.Maruti_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Maruti.findById( req.query.id)
    res.render('Marutidetail',
   { title: 'Maruti Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a Maruti.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Maruti_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Maruticreate', { title: 'Maruti Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a Maruti.
// query provides the id
exports.Maruti_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Maruti.findById(req.query.id)
    res.render('Marutiupdate', { title: 'Maruti Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.Maruti_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Maruti.findById(req.query.id)
    res.render('Marutidelete', { title: 'Maruti Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };