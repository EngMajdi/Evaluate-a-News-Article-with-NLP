// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
//const fetch = require('node-fetch');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const cors = require('cors');
// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));
console.log(__dirname)

// Define base URL and API key for MeaningCloud API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = process.env.API_KEY; // Assuming you have an environment variable named API_KEY

// Logging the URL and API key
console.log('URL:', baseURL);
console.log('API key:', apiKey);

// Define the root route to serve index.html
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// POST Route to fetch article information from MeaningCloud API
app.post('/api', async function (req, res) {
    const userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}?key=${apiKey}&url=${userInput}&lang=en`;
    const response = await fetch(apiURL)
    const apiData = await response.json()
    console.log(apiData)
    res.send(apiData)
})



// Start the server
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
