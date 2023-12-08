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

router.get('/', function(req, res, next) {
  res.render('index', { title: "Message Board", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("new");
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.message,
    user: req.user,
    dateAdded: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
