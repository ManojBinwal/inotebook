const express = require("express")
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

//creating a User using: POST "/api/auth/"  Doesn't require auth
router.post('/', [
    body('email', 'Enter a valid E-mail').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'password is too short min 6 characters').isLength({ min: 6 }),

], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(user => res.json(user)).catch(err=> {console.log(err)
        res.json({error: 'please enter a unique value for email' , message: err.message})})

})

module.exports = router