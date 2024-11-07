const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// CORS configuration - Allow requests from localhost:5500
const corsOptions = {
    origin: 'http://127.0.0.1:5500',  // Only allow this origin
    methods: 'GET',                   // Only allow GET requests
    allowedHeaders: 'Content-Type'    // Allow specific headers
};

// Apply CORS middleware with specific options
app.use(cors(corsOptions));

// Route to get the current date
app.get('/get-date', (req, res) => {
    const currentDate = new Date().toLocaleString();
    res.json({ date: currentDate });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Date server running on http://localhost:${PORT}`);
});
