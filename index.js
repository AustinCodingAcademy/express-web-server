const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const producets = require("./state").products;
const users = require("./state").users;

app.use(bodyParser.json());

const getProducts = (request,response) => {
  response.json(producets)
}

const getUsers = (request,response) => {
  response.json(users)
}

const getProduct = (request,response) => {
  response.json(producets[request.params.index])
}

const getUser = (request,response) => {
  response.json(users[Number(request.params.index)-1])
}

const postUser = (request,response) => {
  const tempBody = request.body
  tempBody.id = Number(users[users.length-1].id)+1
  users.push(tempBody)
  response.json(tempBody)
}

const postProduct = (request,response) => {
  const tempBody = request.body
  tempBody.id = Number(producets[producets.length-1].id)+1
  producets.push(tempBody)
  response.json(tempBody)
}

const putUser = (request,response) => {
  const tempBody = request.body
  tempBody.id = users[request.params.index-1].id
  users[request.params.index-1] = tempBody
  response.json(tempBody)
}

const putProduct = (request,response) => {
  const tempBody = request.body
  tempBody.id = producets[request.params.index-1].id
  producets[request.params.index-1]= tempBody
  response.json(tempBody)
}

const deleteUser = (request,response) => {
  users.splice(Number(request.params.index)-1,1)  
  response.json("deleted")
}

const deleteProduct = (request,response) => {
  producets.splice(Number(request.params.index)-1,1)  
  response.json("deleted")
}



app.get('/users', getUsers)

app.get('/products', getProducts)

app.get('/users/:index', getUser)

app.get('/products/:index', getProduct)

app.post('/users',postUser)

app.post('/products',postProduct)

app.put('/users/:index',putUser)

app.put('/products/:index',putProduct)

app.delete('/users/:index',deleteUser)

app.delete('/products/:index',deleteProduct)


app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});



