const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get('/users', (request, response, next) => {
    // lets you define what's in the GET object
    // '/users' is your key; the callback is where the value comes from
    response.send("hi")
});

app.post('/users', (request, response, next) => {
    // lets you define what's in the POST object
    // '/users' is your key; the callback is where the value comes from
    response.send("hi from posting")
});

app.get('/users/:id', (request, response, next) => {
    // request.params is part of express
    // we came up with id
    response.json({ theidfromthepath: request.params.id })
});

app.put('/users/1', (request, response, next) => {
    // lets you define what's in the PUT object
    // '/users' is your key; the callback is where the value comes from
    response.send("PUT PUT PUT")
});

app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});

