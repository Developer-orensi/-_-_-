const express = require('express');
const { request } = require('http');
const app = express()

var cors = require('cors')


app.use(cors())

const port = 3000;

app.get('/', function(req, res) {
    res.send('<h1>안녕 세상아</h1>')
})

app.get('/good', function(req, res) {
    res.json({"멍멍" : '이렁셩'})
})

app.get('/sound/:id', function(req, res) {
    res.json({ id: req.params.id });
});







app.listen(port, () =>{
    console.log('This server is live on...' + port)
})
