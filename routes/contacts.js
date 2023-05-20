const express = require("express");

const contactsController = require("../controllers/contacts");

const router = express.Router();

// GET /feed/posts
router.get("/", contactsController.getData);
// localhost:8080/contacts/

// router.get("/:id", (req, res, next) => {
//   console.log(req.params.id);
//   res.status(200).send(req.params.id);
// });

router.get("/:id", contactsController.getSingleData);
// localhost:8080/contacts/id

module.exports = router;
