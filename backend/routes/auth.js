const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'dfadfdsfsdfsddsnfsd3232'

//Route1 - Creating a User using: POST "/api/auth/" Doesn't require auth
router.post('/createuser', [
    body('email', 'Enter a valid E-mail').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'password is too short min 6 characters').isLength({ min: 6 }),
], async (req, res) => {
    // Finds the validation errors in this request and returns bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with the same email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" });
        }
        //add salt to password of length 10
        const salt = await bcrypt.genSalt(10);
        //create bcrypt hash password from regular password and salt
        const secPass = await bcrypt.hash(req.body.password, salt)

        // Create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
        //create a token with id to be sent to jwt for identification of user
        const data = {
            user: {
                id: user.id
            }
        }
        //generate a token by sending data and secret to jwt 
        const authToken = jwt.sign(data, JWT_SECRET);
        return res.json({ authToken });

        //catch any error and send a message using try - catch
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

//Route2: Login Authenticate a user using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid E-mail').isEmail(),
    body('password', 'password cannot be blank').exists(),
], async (req, res) => {

    // Finds the validation errors in this request and returns bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(payload, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }

})

module.exports = router;
