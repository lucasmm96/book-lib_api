const express = require('express');
const app = express();
const bookRoutes = require('./routes/book');

app.use('/books', bookRoutes)

app.listen(8080);