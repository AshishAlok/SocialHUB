# Project Structure: Social Media App
SocialHub-app/
│── backend/                # Node.js + Express Backend
│   ├── node_modules/
│   ├── config/
│   │   ├── db.js           # Database connection
│   │   ├── jwtConfig.js    # JWT Secret & Expiry
│   ├── middleware/
│   │   ├── authMiddleware.js  # Middleware to verify JWT
│   ├── models/
│   │   ├── User.js         # User model (MongoDB)
│   ├── routes/
│   │   ├── authRoutes.js   # Authentication routes
│   ├── controllers/
│   │   ├── authController.js  # Auth logic (login/signup)
│   ├── server.js          # Main Express app
│   ├── .env               # Environment variables
│── frontend/              # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js    # Login page
│   │   ├── context/
│   │   │   ├── AuthContext.js  # Context for Auth state
│   │   ├── services/
│   │   │   ├── authService.js  # API calls for auth
│   │   ├── App.js         # Main app file
│   ├── public/
│   ├── package.json
│── README.md


# How to run backend

go to /backend and
$ npm i
Instructions to run:-  
$ npx nodemon server.js


# How to run frontend:
$ cd /FRONTEND
$ npm run dev