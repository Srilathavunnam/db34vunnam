var express = require("express");
const Maruti_controlers = require("../controllers/Maruti");
var router = express.Router();

/* GET restaurants */
router.get("/", Maruti_controlers.Maruti_view_all_Page);
router.get('/detail', Maruti_controlers.Maruti_view_one_Page);
/* GET create Maruti page */
router.get('/create', Maruti_controlers.Maruti_create_Page);
/* GET create update page */
router.get('/update', Maruti_controlers.Maruti_update_Page);
/* GET create Maruti page */
router.get('/delete', Maruti_controlers.Maruti_delete_Page);

module.exports = router;
