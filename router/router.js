const express = require('express');
const router = express.Router();
const checkHeader = require("../middlewares/check");
const doTheMath = require("../controller/logicControl");

router.get("/cal", checkHeader.checkHeader,doTheMath.doTheMath);
module.exports = router;
