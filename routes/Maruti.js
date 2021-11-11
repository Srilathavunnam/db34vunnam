var express = require("express");
const Maruti_controlers = require("../controllers/Maruti");
var router = express.Router();

/* GET restaurants */
router.get("/", Maruti_controlers.Maruti_view_all_Page);
module.exports = router;
