const express = require('express')
const dotenv = require("dotenv")
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000 

app.listen(PORT, ()=>{
    console.log("Server started Running...")
})

//End point 1
app.get("/string", (request, response) =>{
    response.send("I am very exited on this course")
}) 

//End point 2
app.get('/object', (request, response) => {
    response.send({ message: 'Hello, world!' });
  });

  app.get('/array', (request, response) => {
    response.send(['apple', 'banana', 'orange']);
  });

