const express = require('express');
const app = express();
const baseRoutes = require('./routes')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('', baseRoutes);

port = 4000
app.listen(port, () => console.log(`listening on port ${port}`));