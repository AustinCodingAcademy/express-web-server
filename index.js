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
  const foundObject = products.find( item => {
    return item.id == request.params.userId
  })
  foundObject ? response.json(foundObject) : response.send("Not Found")
}

const getUser = (request,response) => {
  const foundObject = users.find( user => {
    return user.id == request.params.userId
  })
  foundObject ? response.json(foundObject) : response.send("Not Found")
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
  const foundindex = users.findIndex( user => {
    return user.id == request.params.userId
  })
  if(foundindex>-1){
    tempBody.id = users[foundindex].id
    users[foundindex]= tempBody
    response.json(tempBody)
  }else{
    response.send("Not Found")
  }
}

const putProduct = (request,response) => {
  const tempBody = request.body
  const foundindex = products.findIndex( user => {
    return user.id == request.params.userId
  })
  if(foundindex>-1){
    tempBody.id = producets[foundindex].id
    producets[foundindex]= tempBody
    response.json(tempBody)
  }else{
    response.send("Not Found")
  }
}

const deleteUser = (request,response) => {
  const foundindex = users.findIndex( user => {
    return user.id == request.params.userId
  })
  if(foundindex>-1){
    users.splice(foundindex,1)  
    response.send("deleted")
  }else{
    response.send("Not Found")
  }

}

const deleteProduct = (request,response) => {
  const foundindex = products.findIndex( user => {
    return user.id == request.params.userId
  })
  if(foundindex>-1){
    products.splice(foundindex,1)  
    response.send("deleted")
  }else{
    response.send("Not Found")
  }
}



app.get('/users', getUsers)

app.get('/products', getProducts)

app.get('/users/:userId', getUser)

app.get('/products/:userId', getProduct)

app.post('/users',postUser)

app.post('/products',postProduct)

app.put('/users/:userId',putUser)

app.put('/products/:userId',putProduct)

app.delete('/users/:userId',deleteUser)

app.delete('/products/:userId',deleteProduct)


app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});



