const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const users = require("./state").users;

app.use(bodyParser.json())
app.listen(3000)

// Give your server the ability to respond to a GET request with a path "/users" and return the users array from state.js
app.get('/users', (req, res)=> {
  res.json(users)
});

// Give your server the ability to respond to a GET request with a path "/users/1" and return the first user object from the users array from state.js
app.get('/users/:id', (req, res)=> {
  let id = req.params.id;
  res.json(users[id-1]);
});

// Give your server the ability to respond to a POST request with a path "/users" and just add a hard coded user object to the users array from state.js. .json() the last user in the array to send it back to the client. (if you do another GET request you should see this added)
app.post('/users', (req, res)=> {
  users.push({
    "id": 6,
    "name": "Daniel Mutter",
    "occupation": "Teacher",
    "avatar": "https://static01.nyt.com/images/2014/01/28/science/28SLOT_SPAN/28SLOT-jumbo.jpg?quality=90&auto=webp"
  })
  res.json(users)
});

//Give your server the ability to respond to a PUT request with a path "/users/1" and just change any key value on the first user object in the users array in state.js. .json() this user to send it back to the client.
app.put('/users/:id', (req, res)=> {
  let id = req.params.id;
  let newUserName = users[id-1];
  newUserName.name = "Bob Ross";
  res.json(newUserName);
});

//Give your server the ability to respond to a DELETE request with a path "/users/1" and remove one item from the users array. send() back a messsage "deleted"
app.delete('/users/:id', (req, res)=> {
  let id = req.params.id -1;
  users.splice(id, 1);
  res.json("deleted");
})













// const express = require("express");

// const app = express();

// app.get('/', (req, res)=> {
//     res.send('Monkeytime')
//   })

//   app.listen(3000)



// app.listen(3002, (err) => {
//  if (err) {
//    return console.log("Error", err);
//  }
//  console.log("Web server is now listening for messages", err);
// });

// app.get('/users', (request,response,next) => {
//     response.send("hi")
//    });

// app.post('/users', (request,response,next) => {
//     response.send("hi from posting")
//    });

// app.get('/users/:id', (request,response,next) => {
//     response.json({theidfromthepath:request.params.id})
//    })
   


