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

// displaying users array in browser
app.get('/users', (request, response, next) => {
    // lets you define what's in the GET object
    // '/users' is your key; the callback is where the value comes from
    response.send(users)
});

// adding a new user to the users array in Postman and in browser
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

// getting a specific user to display in the browser
app.get('/users/:id', (request, response, next) => {
    // request.params is part of express
    // we came up with id
    response.json(users[request.params.id - 1])
});

// changing a key value of a specific user
app.put('/users/:id', (request, response, next) => {
    // lets you define what's in the PUT object
    // '/users' is your key; the callback is where the value comes from
    users[request.params.id - 1].name = "Todd";
    response.json(users[request.params.id - 1])
});

// deleting the last user in the array
app.delete('/users/:id', (request, response, next) => {
    // lets you define what's in the DELETE object
    // '/users' is your key; the callback is where the value comes from
    users[request.params.id - 1].isActive = false;
    response.send("deleted")
    if (users[request.params.id - 1].isActive === false) {
        users.splice(request.params.id - 1, 1)
    }
    console.log(users)
});

app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});

