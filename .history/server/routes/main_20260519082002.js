const express = require('express');
const router = express.Router();

//Routes

router.get('',(req,res)=>{
    const locals = {
        title: 'Obeke Godfrey Vient - Software Quality Assurance Engineer & DevOps Engineer Blog',
        description: 'Simple Blog created with NodeJs and Express'
    }
    res.render('index', { locals });
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});     


module.exports = router;