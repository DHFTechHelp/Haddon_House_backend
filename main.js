const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const mongoClient = require('mongodb').MongoClient
const assert = require('assert');
const bodyParser = require('body-parser');
app.use(bodyParser())

var url = 'mongodb://localhost/haddon_house'


function saveApplication(db, callback){
  let applicants = db.collection('applicants')
}


app.post('/', function(req, res){
  console.log(req.body);
  console.log(req.body);
  mongoClient.connect(url, function(err, db){
    let applicants = db.collection('applicants');
    applicants.insertOne(req.body).then(function(){
      res.send(req.body)
      console.log('worked');
      db.close();
    }).catch(function(){
      console.log("Errors");
      res.send('Errors')
      db.close();
    })
  })
})

app.listen(3000, function(){
  console.log('working');
})
