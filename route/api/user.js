const express = require('express');
const router = express.Router();

// * GET api-/user 
// * TEST route 
// * Public
router.get('/', (req,res) = res.send('USer route'));


module.exports = router;