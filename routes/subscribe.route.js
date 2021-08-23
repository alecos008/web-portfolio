const router = require("express").Router();
const User = require("../models/User.model");

require("../db");

/* GET home page */
router.post("/", (req, res, next) => {
  const { name, email } = req.body;
  User.create({ name, email })
    .then((newContact) => {
      console.log(newContact);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
