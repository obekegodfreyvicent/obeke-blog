const express = require('express');
const router = express.Router();

//Routes

router.get('',(req,res)=>{
    const locals = {
        title: 'Obeke Godfrey Vient - Software Quality Assurance Engineer & DevOps Engineer Blog',
        description: "Simple Blog created with NodeJs, Express and MongoDB"
    }
    res.render('index', { locals });
});

router.get('/about',(req,res)=>{
    const locals = {
        title: 'About Me',
        description: 'Learn more about Obeke Godfrey Vicent'
    }
    res.render('about');
});

router.get('/contact',(req,res)=>{
    const locals = {
        title: 'Contact Me',
        description: 'Get in touch with Obeke Godfrey Vicent'
    }
    res.render('contact', { locals });
});     


module.exports = router;