// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST request to authenticate user
router.post('/login', authController.loginUser);
// router.get('/test',(req,res)=>{
//     console.log("request received");
// });
router.post('/register', authController.registerUser);

// router.get('/test',async()=>{
//     console.log("request received");
// });

module.exports = router;
