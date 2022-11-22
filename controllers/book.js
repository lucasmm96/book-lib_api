exports.getBooks = (req, res, next) => {
  res.status(200).json({
    books: [
      {title: 'book01', author: 'autor01'}
    ]
  });
};

exports.postBook = (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  res.status(201).json({
    message: 'Book successfully created',
    data: {
      id: new Date().toISOString(),
      title: title,
      author: author
    }
  })
};