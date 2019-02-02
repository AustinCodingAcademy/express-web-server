
const express = require("express");
const bodyParser = require("body-parser");
const state = require('./state');


const app = express();
app.use(bodyParser.json());


app.get('/:state', (req,res) => {
    if (req.params.state === 'users') {
        res.json(state.users);
    } else if (req.params.state === 'products' )
        res.json(state.products);
})

app.get('/:state/:id', (req,res) => {
    if (req.params.state === 'users') {
        res.json(state.users[req.params.id-1]);
    } else if (req.params.state === 'products' ) {
        res.json(state.products[req.params.id-1]);
    }    
})

app.post('/:state', (req,res) => {
    if (req.params.state === 'users') {
        const newUser = req.body;
        newUser.id = state.users.length+1;
        state.users.push(newUser);
        res.json(state.users[state.users.length-1]);
    } else if (req.params.state === 'products') {
        const newUser = req.body;
        newUser.id = state.products.length+1;
        state.products.push(newUser);
        res.json(state.products[state.products.length-1]);
    }
})

app.put('/:state/:id', (req,res) => {
    if (req.params.state === 'users') {
        const findUser = state.users[req.params.id -1];
        const findUserKeys = Object.keys(findUser);
        const body = req.body;
        const bodyKeys = Object.keys(body);
        findUserKeys.forEach(keys => {
            bodyKeys.forEach(bodyKeys => {
                if(keys === bodyKeys) {
                    findUser[keys] = body[bodyKeys];
                }
            })
        })
        res.json(findUser);
    } else if (req.params.state === 'products') {
        const findUser = state.products[req.params.id -1];
        const findUserKeys = Object.keys(findUser);
        const body = req.body;
        const bodyKeys = Object.keys(body);
        findUserKeys.forEach(keys => {
            bodyKeys.forEach(bodyKeys => {
                if(keys === bodyKeys) {
                    findUser[keys] = body[bodyKeys];
                }
            })
        })
        res.json(findUser);
    }
    
})

app.delete('/:state/:id', (req,res) => {
    if (req.params.state === 'users') {
        const deleteUser = req.params.id -1;
        state.users.splice(deleteUser,1);
        res.send(`User ${req.params.id} has been deleted`);
    } else if (req.params.state === 'products') {
        const deleteUser = req.params.id -1;
        state.products.splice(deleteUser,1);
        res.send(`Product ${req.params.id} has been deleted`);
    }
})

app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});


