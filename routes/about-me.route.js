const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("about-me");
});

module.exports = router;
