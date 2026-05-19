const express = require('express');
const router = express.Router();

//Routes
router.get('/',(req,res)=>{
   // res.send('Welcome to Obeke Godfrey Vicent, Software Quality Assurance & DevOps Engineer Portfolio  Website');
    res.render('index');
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});     


module.exports = router;