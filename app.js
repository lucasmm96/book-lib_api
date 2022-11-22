const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book');

const app = express();
app.use(bodyParser.json());

app.use('/books', bookRoutes)

app.listen(8080);