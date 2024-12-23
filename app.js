/*const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
const userRoutes = require('./routes/userRoutes');
const ItemRouter = require('./routes/LoginRouter');


const app = express();
// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
// Use the User routes
app.use('/api', userRoutes);
app.use('/api', ItemRouter);


// MongoDB connection string (local or MongoDB Atlas)
const mongoURI = 'mongodb+srv://geethabhavanibelli:geetha1@cluster0.frwud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Connect to MonoDB
mongoose.connect(mongoURI,{ useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

   


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); // Import dotenv
const userRoutes = require('./routes/userRoutes');
const ItemRouter = require('./routes/LoginRouter');

// Initialize dotenv to load variables from .env
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// Use the User routes
app.use('/api', userRoutes);
app.use('/api', ItemRouter);

// MongoDB connection string (from .env file)
const mongoURI = process.env.MONGO_URI; // Get the URI from .env file

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Start the server
const port = process.env.PORT || 5000; // Port from .env or default to 5000
app.listen(port, () => console.log(`Server running on port ${port}`));
