# Express Server
Let's build a web server using the express framework.


## Part 1. Use the express built in REST methods
* ---DONE Give your server the ability to respond to a GET request with a path "/users" and return the users array from state.js
* ---DONE Give your server the ability to respond to a GET request with a path "/users/1" and return the first user object from the users array from state.js
* ---DONE Give your server the ability to respond to a POST request with a path "/users" and just add a hard coded user object to the users array from state.js. .json() the last user in the array to send it back to the client. (if you do another GET request you should see this added)
* ---DONE Give your server the ability to respond to a PUT request with a path "/users/1" and just change any key value on the first user object in the users array in state.js. .json() this user to send it back to the client.
* ---DONE Give your server the ability to respond to a DELETE request with a path "/users/1" and remove one item from the users array. send() back a messsage "deleted"


## Part 2. Add the body-parser module to your project
* ---DONE Give your server the ability to handle a POST request with a path "/users" and add the data from the client to the users array
* ---DONE Assign an id property to the user object that is a number that increments by 1 each time.
* ---DONE response.json() the user object to send it back to the client. (if you do another GET request you should see this added)

## Part 3. Use path variables
* ----DONE Give your server the ability to respond to a GET request with a path `/users/:userId` and return the user object from the users array that has the _id == userId
* ---DONE Give your server the ability to respond to a PUT request with a path `/users/:userId` and just change any key value on the user object with this _id 
* ---DONE Give your server the ability to respond to a DELETE request with a path `/users/:userId` and find the user with this id from the array. give this user object a new key value isActive:false.  send() back a messsage "deleted"
