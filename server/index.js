require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.fade_empire_nyc_port || 8081;

const publicUrl = path.join(__dirname, "..", "public");
const indexUrl = path.join(__dirname, "..", "public", "index.html");

app.use(express.static(publicUrl));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(indexUrl);
});

app.listen(port, () => {
  console.log('Listening on port: ', port);
});