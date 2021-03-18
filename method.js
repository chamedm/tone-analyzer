require('dotenv').config();
const express = require('express');
const router = express.Router();
const https = require('https');
const axios = require('axios');

const urlWithKey = `${process.env.url}apikey=${process.env.key}`
const params = "&text=Team%2C%20I%20know%20that%20times%20are%20tough%21%20Product%20sales%20have%20been%20disappointing%20for%20the%20past%20three%20quarters.%20We%20have%20a%20competitive%20product%2C%20but%20we%20need%20to%20do%20a%20better%20job%20of%20selling%20it%21";

//1. Suma - Recibe en el body un JSON en ese objeto solo hay un tag “nums” 
//que será un arreglo con todos los números que deben de sumar.
router.route('/textAnalyze').get((req, res) => {
  axios.get(`${urlWithKey}${params}`)
  .then(response => {
    console.log(response.data);
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log("error")
    console.log(error);
  });
  res.json({ 'respuesta': 'finished' });
});

module.exports = router;