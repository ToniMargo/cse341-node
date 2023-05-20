const router = require("express").Router();

const contactsController = require("../controllers/contacts");

// GET /feed/posts
router.get("/", contactsController.getData);
// localhost:8080/contacts/

router.get("/:id", contactsController.getSingleData);
// localhost:8080/contacts/id

module.exports = router;
