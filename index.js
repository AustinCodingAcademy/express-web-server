//my ip 192.168.36.87:3002

const express = require("express");
const bodyParser = require("body-parser");
const users = require("./state.js").users;

const app = express();
app.use(bodyParser.json());

//1
app.get('/users', (request,response,next) => {
    response.json(users);
});
//2
app.get('/users/1', (request,response,next) => {
    response.json(users[0]);
});
//3
app.post('/users', (request,response,next) => {
    let user = request.body;
    users.push(user);
    response.json(user);
});
//4
app.put('/users/1', (request,response,next) => {
    let user = request.body;
    users[0] = user;
    response.json(user);
});

app.get('/contacts/:id', (request,response,next) => {
    //theidfromthepath & id are variables created by John
    //colon is magic character
    response.json({theidfromthepath:request.params.id})
});

app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});

