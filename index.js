let state = require("./state.js")
let users = state.users
let express = require("express")
let products = state.products


const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get("/users", (req, res) => {
    res.json(users)
})
app.get("/users/:id", (req, res) => {
    let userId =  req.params.id
    let findUsers = []
    users.find((aUser) => {
        if (aUser.id == userId) {
            findUsers.push(aUser)
        }
    })
    findUsers.map((aUser) => {
        res.json(aUser)
    })
})
app.post("/users", (req, res) => {
    newId = users[users.length - 1].id + 1
    let body = req.body
    body.id = newId
    users.push(body)
    res.json(body)
})
app.put("/users/:id", (req, res) => {
    let userId =  req.params.id
    let index = users.findIndex(user => user.id === Number(userId))
    let oldId = users[index].id
    users[index] = req.body
    users[index].id = oldId
    res.json(users[index])
})
app.delete("/users/:id", (req, res) => {
    let userId =  req.params.id
    let index = users.findIndex(user => user.id === Number(userId))
    users[index].isActive = false
    res.send("deleted")
})

app.listen(3002, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages on port",3002);
   });
