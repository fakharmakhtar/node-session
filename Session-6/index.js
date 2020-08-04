const express = require('express');
const app = express();
require('dotenv').config({ path: __dirname + '/.env' });

const bodyParser = require('body-parser');
const baseRoutes = require('./src/routes');
const errorHandler = require('./src/middlewares/error.middleware');



app.use(bodyParser.json());
app.use('', baseRoutes);

app.use(() => errorHandler);

const port = 4000;
app.listen(4000, () => console.log(`listening on port ${port}`));