/* Main starting point of the application */
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan'); /* Middleware : morgan is a logging request for server */
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

/* DB Setup */
mongoose.connect('mongodb://127.0.0.1:27017/auth');


/* App setup */
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);


/* Server setup */
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
