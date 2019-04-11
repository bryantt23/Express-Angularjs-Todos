var express = require('express');
var app = express();
var bodyParser = require('body-parser');

https://stackoverflow.com/questions/31119605/expressjs-angularjs-post
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded

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


app.post('/data', function(req, res) {
    // var body=req.body;
    let todos=req.body;
    console.log(5555);
    console.log(req.body);
    console.log(req.body.desc);
    console.log(JSON.stringify({"todos": todos}));
    var c=5;
    // var obj = req.query.name;
    // var age = req.query.age;
  
    // var person = {
    //   name: name,
    //   age: age
    // };
  
    saveTodosToPublicFolder(todos, function(err) {
      if (err) {
        res.status(404).send('User not saved');
        return;
      }
    });
  
    //   res.send('User saved');
    // });
    res.end();
  });
  
  function saveTodosToPublicFolder(todos, callback) {
    fs.writeFile('./data/data.json', JSON.stringify({"todos": todos}), callback);
  }
  

app.listen(3000);