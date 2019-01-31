//my ip 192.168.36.87:3002

const express = require("express");
const bodyParser = require("body-parser");
const users = require("./state.js").users;

const app = express();
app.use(bodyParser.json());

//1
app.get('/users', (req,res,next) => {
    res.json(users);
});
//2
app.get('/users/1', (req,res,next) => {
    res.json(users[0]);
});
//3
//6
app.post('/users', (req,res,next) => {
    let user = req.body;
    user.id = findHighestId();
    users.push(user);
    res.json(user);
});
//4
app.put('/users/1', (req,res,next) => {
    let user = req.body;
    users[0] = user;
    res.json(user);
});
//5
app.delete('/users/:id', (req,res,next) => {
    let index = users.findIndex(u=> u.id == req.params.id)
    users.splice(index,1);    
    res.send('Deleted');
});

app.get('/users/:id', (req,res,next) => {
    let user = users.find(u=> u.id == req.params.id);
    res.json({user});
});

app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});

// 7/8
function findHighestId(){
    let idArray = [];
    users.forEach(u => idArray.push(u.id));
    return Math.max(...idArray) +1;
}
