exports.getBooks = (req, res, next) => {
  res.status(200).json({
    books: [
      {title: 'book01', author: 'autor01'},
      {title: 'book02', author: 'autor02'},
      {title: 'book03', author: 'autor03'},
      {title: 'book04', author: 'autor04'},
      {title: 'book05', author: 'autor05'}
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