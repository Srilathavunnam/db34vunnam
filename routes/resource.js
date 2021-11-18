var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Maruti_controller = require('../controllers/Maruti');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Maruti ROUTES ///
// POST request for creating a Maruti.
router.post('/resource/Maruti', Maruti_controller.Maruti_create_post);
// DELETE request to delete Maruti.
router.delete('/resource/Maruti/:id', Maruti_controller.Maruti_delete);
// PUT request to update Maruti.
router.put('/resource/Maruti/:id', Maruti_controller.Maruti_update_put);
// GET request for one Maruti.
router.get('/resource/Maruti/:id', Maruti_controller.Maruti_detail);
// GET request for list of all Maruti items.
router.get('/resource/Maruti', Maruti_controller.Maruti_list);
module.exports = router;