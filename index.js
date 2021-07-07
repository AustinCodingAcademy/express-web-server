const express = require("express");
const bodyParser = require("body-parser");
let users = require("./state").users;


const app = express();
app.use(bodyParser.json());

app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});

app.get('/users', (request, response, next) => {
    response.json(users);
});

app.post('/users', (request, response, next) => {
    let user = {id:users.length + 1, firstName: request.body.firstName, lastName: request.body.lastName }
    users.push(user);
    response.json(user);
});

app.get('/users/:userId', (request,response,next) => {
    let user =  users.filter(p=>p.id === Number(request.params.userId));
    response.json(user);  
})

app.put('/users/:userId', (request, response, next) => {
    let user = users[Number(request.params.userId) - 1];
    user.firstName = request.body.firstName;
    user.lastName = request.body.lastName;
    response.json(user);  
})

app.delete('/users/:userId', (request, response, next) => {
    users.splice(Number(request.params.userId) - 1, 1);
    response.send("Deleted");
})

   
   




