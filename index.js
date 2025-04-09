const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.get('/joke',async (req, res) => {
    try{
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        res.json(response.data);
    }
    catch (error) {
        console.error('Error fetching joke:', error);
        res.status(500).send('Failed to fetch joke')
    }
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
