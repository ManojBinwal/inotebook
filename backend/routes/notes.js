const express = require("express")
const note =  express.Router()

note.get('/', (req, res)=> {
    obj = {
    }
    res.json([obj])
})

module.exports = note