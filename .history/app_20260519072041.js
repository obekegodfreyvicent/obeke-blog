require('dotenv').config()

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;

//templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.send('Hello World');
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});