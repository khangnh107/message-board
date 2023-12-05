const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    dateAdded: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    dateAdded: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Message Board", messages: messages });
});

module.exports = router;
