# Express Server
Let's build a web server using the express framework. This is pretty much the same thing as the node-web-server, just using express. Do each part completely before starting the next part. You don't need to keep the code from the previous part or you can do each part in seperate files. This is not for a grade.


## Part 1. Use the express built in REST methods
* Give your server the ability to respond to a GET request with a path "/users" and return the users array from state.js
* Give your server the ability to respond to a GET request with a path "/users/1" and return the first user object from the users array from state.js
* Give your server the ability to respond to a POST request with a path "/users" and just add a hard coded user object to the users array from state.js. .json() the last user in the array to send it back to the client. (if you do another GET request you should see this added)
* Give your server the ability to respond to a PUT request with a path "/users/1" and just change any key value on the first user object in the users array in state.js. .json() this user to send it back to the client.
* Give your server the ability to respond to a DELETE request with a path "/users/1" and remove one item from the users array. send() back a messsage "deleted"


## Part 2. Add the body-parser module to your project
* Give your server the ability to handle a POST request with a path "/users" and add the data from the client to the users array
* Assign an _id property to the user object that is a number that increments by 1 each time.
* response.json() the user object to send it back to the client. (if you do another GET request you should see this added)

## Part 3. Use path variables
* Give your server the ability to respond to a GET request with a path `/users/:userId` and return the user object from the users array that has the _id == userId
* Give your server the ability to respond to a PUT request with a path `/users/:userId` and just change any key value on the user object with this _id 
* Give your server the ability to respond to a DELETE request with a path `/users/:userId` and find the user with this id from the array. give this user object a new key value isActive:false.  send() back a messsage "deleted"
