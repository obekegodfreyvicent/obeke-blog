const express = require('express');
const router = express.Router();

//Routes
router.get('/',(req,res)=>{
   // res.send('Welcome to Obeke Godfrey Vicent, Software Quality Assurance & DevOps Engineer Portfolio  Website');
    res.render('index');
});

module.exports = router;