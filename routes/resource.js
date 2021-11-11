var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Maruti_controller = require('../controllers/Maruti'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/Marutis', Maruti_controller.Maruti_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/Marutis/:id', Maruti_controller.Maruti_delete); 
 
// PUT request to update Costume. 
router.put('/resource/Marutis/:id', 
Maruti_controller.Maruti_update_put); 
 
// GET request for one Costume. 
router.get('/resource/Marutis/:id', Maruti_controller.Maruti_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/Marutis', Maruti_controller.Maruti_list); 
 
module.exports = router; 