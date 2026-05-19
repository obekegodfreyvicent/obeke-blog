const express = require('express');
const router = express.Router();

//Routes
router.get('/',(req,res)=>{
   // res.sent, Software Quality Assurance & DevOps Engineer Portfolio  Website');
    res.render('index');
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});     


module.exports = router;