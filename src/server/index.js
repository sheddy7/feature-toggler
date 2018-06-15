const express = require("express");
const bodyParser = require('body-parser');

export const PORT = 3000;

import fetchBitstampData from './middleware/fetchBitstampData';

const app = express();

app.set("port", PORT);

app.use(bodyParser.json());

app.get('/api/bitstamp', fetchBitstampData);

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(PORT);
