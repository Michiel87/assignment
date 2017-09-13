const express = require('express');
const app = express();
const path = require("path");

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/style.css',(req,res) => {
  res.sendFile(path.join(__dirname+'/style.css'));
});

app.get('/script.js',(req,res) => {
  res.sendFile(path.join(__dirname+'/script.js'));
});

app.get('/async.js',(req,res) => {
  res.sendFile(path.join(__dirname+'/async.js'));
});

app.get('/animation.js',(req,res) => {
  res.sendFile(path.join(__dirname+'/animation.js'));
});

app.get('/better-call-saul.json',(req,res) => {
  res.sendFile(path.join(__dirname+'/better-call-saul.json'));
});

app.listen(process.env.PORT || 8080);
console.log('server running...')
