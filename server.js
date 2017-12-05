const express = require('express');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 49333;
const app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, (err) => {
    if (err) return next(err);
    console.log('App listenning on port ' + port);
});