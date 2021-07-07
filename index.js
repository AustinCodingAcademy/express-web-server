//my ip 192.168.36.87:3002

const express = require("express");
const bodyParser = require("body-parser");
const users = require("./state.js").users;
const inActiveUsers = require("./state.js").inActiveUsers;

const app = express();
app.use(bodyParser.json());

app.get('/users', (req,res,next) => {
    res.json(users);
});

// app.get('/users/1', (req,res,next) => {
//     res.json(users[0]);
// });

app.post('/users', (req,res,next) => {
    let user = req.body;
    user.id = findHighestId();
    users.push(user);
    res.json(user);
});

app.put('/users/1', (req,res,next) => {
    let user = req.body;
    users[0] = user;
    res.json(user);
});

app.delete('/users/:id', (req,res,next) => {
    let index = users.findIndex(u=> u.id == req.params.id);
    let user = users.find(u=> u.id == req.params.id);
    user.isActive = false;
    inActiveUser = users.splice(index,1);
    // console.log(inActiveUser)
    inActiveUsers.push(inActiveUser[0]);
    res.send('Deleted');
});

app.get('/inActiveUsers', (req,res,next) => {
    res.json(inActiveUsers);
});

app.get('/users/:id', (req,res,next) => {
    let user = users.find(u=> u.id == req.params.id);
    res.json({user});
});

app.put('/users/:id', (req,res,next) => {
    let user = users.find(u=> u.id == req.params.id);
    user.upDatedShitObject = req.body
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

