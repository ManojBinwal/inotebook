const connectToMongo = require('./db');
const express = require('express');
const { Router } = require('express');
var cors = require('cors')



connectToMongo();



const app = express()
//free port 3000 for react app
const port = 5000

app.use(cors())

app.use(express.json())  //adding middleware

//available routes
app.use('/api/auth' , require('./routes/auth')),
app.use('/api/note' , require('./routes/note'))


app.listen(port, () => {
    console.log(`iNotebook backend listening on port  http://localhost:${port}`)
})


