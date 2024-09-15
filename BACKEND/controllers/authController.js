const jwt = require('jsonwebtoken');
const sequelize = require('../config/db');
const User = require('../models/User'); // Import the User model

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

// Function to authenticate user
const authenticateUser = async (email) => {
    try {
        // Query the User table to check if the email exists
        const user = await User.findOne({ where: { email : email } });
        // If user is found, return true (authenticated), else return false (not authenticated)
        return user !== null;
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw new Error('Authentication failed');
    }
};

// Function to generate JWT token
const generateToken = (email) => {
    return jwt.sign({ id: email },SECRET_KEY, { expiresIn: '24h' });
};

// Controller function for user authentication
const loginUser = async (req, res) => {
    const { email } = req.body;

    try {
        console.log(`${email}`)
        // Authenticate user
        const isPresent = await authenticateUser(email);
        if (isPresent) {
            // User is authenticated, proceed with further actions
            // If user authentication succeeds, generate JWT token
            const token = generateToken(email);
            // Send token in response
            res.status(200).json({ token });
        } else {
            // User is not authenticated, handle the case appropriately
            return res.status(401).json({ error: 'Invalid credentials' });
        }

    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const registerUser = async (req, res) => {
    const { email, name, gender, institute } = req.body;
    console.log(req.body);
    try {
        // Log the request body
        // console.log('Request Body:', req.body);

        // Create a new user instance with the provided email and other attributes
        const newUser = await User.create({
            email: email,
            name: name,
            gender: gender,
            institute: institute
        });

        // If user creation is successful, send a success response
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        // If an error occurs during user creation, send an error response
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    loginUser,
    registerUser
};
