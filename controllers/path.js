const express = require("express");
const TollGuruRouter = express.Router();
const axios = require('axios');

TollGuruRouter.post('/api/tollguru/v1', async (req, res) => {
  console.log('Request Payload is:', req.body);
  try {
   

    const apiUrl = 'https://apis.tollguru.com/toll/v2/origin-destination-waypoints';
    const apiKey = '98NGb6nJQjrjfnFhbNN8DbnQR9HHJd66';

    const response = await axios.post(apiUrl, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    res.status(response.status);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = TollGuruRouter;
