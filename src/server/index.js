const express = require("express");
const bodyParser = require('body-parser');

export const PORT = 3000;

import fetchFeatureData from './middleware/fetchFeatureData';

const app = express();

app.set("port", PORT);

app.use(bodyParser.json());

app.get('/api/features', fetchFeatureData);

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(PORT);
