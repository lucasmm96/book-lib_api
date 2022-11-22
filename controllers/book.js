

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
