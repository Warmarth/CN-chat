
// const express = require('express');

// const app = express();
// const port = 3000;

// // Define your routes here
// app.get('/api/users', (req, res) => {
//  // Logic to fetch users from database or any other source
//  const users = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Smith' },
//  ];

//  res.json(users);
// });

// // Start the server
// app.listen(port, () => {
//  console.log(`Server is running on port ${port}`);
// });
// In the code snippet above, we have defined a simple Express server that listens on port 3000. We have also defined a single route that responds to GET requests to /api/users by returning a JSON response with a list of users. The server is started by calling app.listen() with the port number and a callback function that logs a message to the console when the server is running.
// In REST terminology, we refer to individual data objects, such as the notes in our application, as resources .

// Every resource has a unique address associated with it - its URL. 

// Creating a new resource for storing a note is done by making an HTTP POST request to the notes URL according to the REST convention that the json-server adheres to. The data for the new note resource is sent in the body of the request.

// The json-server library provides a simple way to create a RESTful API server with a JSON file as the data source. The server can handle CRUD (Create, Read, Update, Delete) operations for resources defined in the JSON file.