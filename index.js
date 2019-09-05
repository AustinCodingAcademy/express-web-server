var users = require("./state.js").users;
var products = require("./state.js").products;

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());


app.get("/users", (req, res, next) => {
    res.json(users);
});

app.get("/users/:id", (req, res, next) => {
    let user = getRecordById(req.params.id, users);
    res.json(user);
});

app.post("/users", (req, res, next) => {
    let user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.json(user);
});

app.put("/users/:userId", (req, res, next) => {
    let user = getRecordById(req.params.userId, users);
    user.modified = true;
    res.json(user);
});

app.delete("/users/:userId", (req, res, next) => {
    let user = getRecordById(req.params.userId, users);
    user.isActive = false;
    res.send("deleted");
});



function getRecordById(id, myArray) {
    let result = myArray.find( element => element.id == id );
    
    if (result)
        return result;
    else
        return null;
}


app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});