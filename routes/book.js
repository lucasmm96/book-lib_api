const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');

router.get('/list', bookController.getBooks);
router.post('/add', bookController.postBook);

module.exports = router;