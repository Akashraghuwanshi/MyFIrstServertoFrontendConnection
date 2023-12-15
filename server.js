
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 4500;

const menu = require('./dishes');
app.use(express.json());


app.get('/menu',(req,res)=>{
    res.json(menu);
})

app.listen(port,()=>{
    console.log(`express server at port ${port}`)
})