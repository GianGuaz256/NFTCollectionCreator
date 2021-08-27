const express = require('express');
require('dotenv').config()
const { createScript } = require('./create')

const app = express();

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log('Hey bro welcome')
});

module.exports = app;