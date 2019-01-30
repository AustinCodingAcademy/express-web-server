const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

app.get('/users', (request,response,next) => {
    response.send("hi")
});
   
app.post('/users', (request,response,next) => {
    users.push(request.body)
    response.send("user saved")
});

app.get('/users/:id', (request,response,next) => {
    response.json({theidfromthepath:request.params.id})
});
   

app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
});