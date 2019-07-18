const express = require("express");
const bodyParser = require("body-parser");
let users = require("./state").users;
let products = require("./state").products;
const app = express();
app.use(bodyParser.json());

app.get('/users', (request,response) => {
    response.json(users)
});

app.get('/users/name/:userName', (request,response) => {
    let user = users.filter(p=>p.name === request.params.userName);
    response.json(user)
});

app.post('/users', (request,response) => {
    let newUser = request.body;
    users.push(newUser);
    response.json(newUser)
});

app.put('/users/id/:idNum', (request,response) => {
    let ids = users.filter(p=>p.id == request.params.idNum);
    users.splice(users.indexOf(ids[0]), 1, request.body)
    response.json(ids)
});

app.delete('/users/id/:idNum', (request,response) => {
    let ids = users.filter(p=>p.id == request.params.idNum);
    let indx = users.indexOf(ids[0])
    users.splice(indx,1)
    response.json(ids)
});


app.listen(3001)

