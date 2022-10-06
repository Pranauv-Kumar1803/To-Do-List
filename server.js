require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const port = 5500||process.env.PORT;

const bodyParser = require('body-parser');


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

let arr=[];
app.get('/',(req,res)=>{
    const d = new Date().toDateString();
    res.render('index',{date:d,arr:arr});
})

app.post('/',(req,res)=>{
    const p = req.body.input;
    arr.push(p);
    res.redirect('/');
    // console.log(p);
})


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})