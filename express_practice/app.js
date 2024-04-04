const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('In users middleware!');
    res.send('<h1>Hello User!</h1>');
    return;
});

app.use('/', (req, res, next) => {
    console.log('In default middleware!');
    res.send('<h1>Hello From Express That is in the Default</h1>');
});

app.listen(3000);