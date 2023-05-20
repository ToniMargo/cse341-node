const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Vianney Alcala");
});

router.use("/contacts", require("./contacts"));

module.exports = router;
