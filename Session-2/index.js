const express = require('express');
const app = express();
const users = require('./users');
const sw = require('./sw');

app.use('/users', users);
app.use('/sw', sw);
app.get('/', (req, res) => res.send('Hello World'));

// app.get('/users', (req, res) => {
//     const users = [{ name: 'Ul' }, { name: 'Blul' }];
//     res.send(users);
// })
const port = 4000;
app.listen(port, () => { console.log(`Server listening on port ${port}`) });