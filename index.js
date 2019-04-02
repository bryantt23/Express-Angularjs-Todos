var express = require('express');
var app = express();

// https://stackabuse.com/reading-and-writing-json-files-with-node-js/
const fs = require('fs');

let rawdata = fs.readFileSync('data/data.json');  
let json = JSON.parse(rawdata);  

// https://flaviocopes.com/express-send-json-response/
app.get('/data', (req, res) => res.json(json)
)
//assuming app is express Object.
app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});


app.listen(3000);