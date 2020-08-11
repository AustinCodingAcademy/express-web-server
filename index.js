const express = require('express')
const bodyParser = require('body-parser')
const users = require('./state').users;


const app = express();
app.use(bodyParser.json());

app.get('/users', (req,res) => {
    res.json(users);
});
   
app.get('/users/:thisid', (req,res) => {
  let id = req.params.thisid;
  res.json(users[id-1]);
});

app.post('/users', function (req,res) {
    let newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.json(newUser);
});

app.put('/users/:thisid', function (req,res) {
    let id = req.params.thisid;
    let thisUser = users[id-1];
    thisUser.name = req.body.name;
    res.json(thisUser);
});

app.delete('/users/:thisid', function (req,res) {
    let id = req.params.thisid;
    users.splice(id-1, 1);
    res.send('deleted');
});

app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
});

//broken code

// const findDeletedUserIndex = (input) => {
//     let userId = Number(input);
//     for (let i = 0; i < users.length; i++){
//         if (users[i].id === userId){
//             return i-1
//         } else return false
//     }
// }

// app.delete('/users/:thisid', function (req,res) {
//     let id = req.params.thisid;
//     let deletedUserIndex = findDeletedUserIndex(id);
//     if (deletedUserIndex == 0 || deletedUserIndex == true){
//         users.splice(deletedUserIndex, 1);
//         res.send('deleted');
//     } else {
//         res.send('nothing there')
//     }
// });