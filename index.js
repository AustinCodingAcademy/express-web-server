// GET will display in the browser
// POST will display in Postman
// PUT will display in Postman
// DELETE will display in Postman
// must GET something before you can see it POSTed to the browser

const express = require("express");
const bodyParser = require("body-parser");
let users = require("./state").users;

const app = express();
app.use(bodyParser.json());

app.get('/users', (request, response, next) => {
    // lets you define what's in the GET object
    // '/users' is your key; the callback is where the value comes from
    response.send(users)
});

app.post('/users', (request, response, next) => {
    // lets you define what's in the POST object
    // '/users' is your key; the callback is where the value comes from
    users.push({
        "id": 6,
        "name": "abby",
        "occupation": "coder",
        "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
    })
    response.send(users)
});

app.get('/users/:id', (request, response, next) => {
    // request.params is part of express
    // we came up with id
    response.json(users[request.params.id - 1])
});

app.put('/users/1', (request, response, next) => {
    // lets you define what's in the PUT object
    // '/users' is your key; the callback is where the value comes from
    users[0].name = "Todd";
    response.send(users[0].name)
});

app.delete('/users/1', (request, response, next) => {
    // lets you define what's in the DELETE object
    // '/users' is your key; the callback is where the value comes from
    users.pop()
    response.send(users)
});

app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});

