const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');


// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Use middleware
app.use(cors());
app.use(bodyParser.json());

// Set the port
const PORT = process.env.PORT || 8070; // Use a different port for Express server

// MongoDB connection URL from environment variables
const URL = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(URL)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Import the house routes
const housesRoute = require('./routes/houses');
const fieldVisitRoutes = require('./routes/filedvisit');
const userRoutes = require('./routes/UserRoutes');
const electionRoutes = require('./routes/electionRoutes');
const procedureRoutes = require('./routes/procedureRoutes');
const ticketsRouter = require('./routes/tickets');
const projectsRouter = require('./routes/projects');
const tuser = require('./routes/tusers.js')
const appointmentRoutes = require('./routes/appointmentRoutes');
const noticeRouter = require('./routes/noticeRoutes');
const ticketRoutes = require('./routes/ticketRoutes.js');




// Use the api routes
app.use('/tickets', ticketsRouter);
app.use('/projects', projectsRouter);
app.use('/api', housesRoute);
app.use('/field', fieldVisitRoutes);
app.use('/users', userRoutes);
app.use('/election', electionRoutes);
app.use('/procedures',procedureRoutes);
app.use('/tuser',tuser);
app.use('/Appointment', appointmentRoutes);
app.use('/notice', noticeRouter);





// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads')); // this kalani kaveesha code
app.use('/api/tickets', ticketRoutes);



// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
