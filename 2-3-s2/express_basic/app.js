// Include express from node_modules
const express = require('express')
const app = express()
// Define server related variables
const port = 3000



// Handle request and response here
app.get('/', (req, res ) => {
  res.render('index')
})

  
app.get('/food', (req, res) => {
  res.send('My favorite food is ice cream')
})

// change into dynamic routes with params ':language'
app.get('/popular/languages/:language', (req, res) => {
  console.log(req)
  res.send(`<h1>${req.params.language} is a popular language</h1>`)
})

// Start and listen the server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})





