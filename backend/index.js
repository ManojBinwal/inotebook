const connectToMongo = require('./db');
const express = require('express');
const { Router } = require('express');

connectToMongo();

const app = express()
//free port 3000 for react app
const port = 5000

app.use(express.json())  //adding middleware

//available routes
app.use('/api/auth' , require('./routes/auth')),
app.use('/api/notes' , require('./routes/notes'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


