const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("form");
});

router.post("/", (req, res, next) => {
  messages.push({
    text: req.message,
    user: req.user,
    dateAdded: new Date(),
  });
  res.redirect("/");
});

module.exports = router;