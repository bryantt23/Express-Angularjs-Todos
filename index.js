var express = require('express');
var app = express();

// https://flaviocopes.com/express-send-json-response/
app.get('/data', (req, res) => res.json({ message: 'Hello world' })
)
//assuming app is express Object.
app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});


app.listen(3000);