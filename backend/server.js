const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes

const exercisesRoute= require('./routes/exercises');
const workoutsRoute= require('./routes/workouts');

app.use('/exercises', exercisesRoute);
app.use('/workouts', workoutsRoute);

// Routes
app.get('/', (req,res)=>{
    res.send("Hello from Home")
});

// Connect to db
mongoose.connect(
        process.env.DB_CONNECTION,
        { useNewUrlParser: true, useUnifiedTopology: true  },
        ()=> console.log('Connection to MongoDB established ')
    );
const PORT = 5000;
app.listen(PORT);

console.log(`Server is running on port ${PORT}`);
