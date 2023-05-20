const router = require('express').Router();

const contactsController = require('../controllers/contacts');

// GET /feed/posts
router.get('/', contactsController.getData);
// localhost:8080/contacts/

router.get('/:id', contactsController.getSingleData);
// localhost:8080/contacts/id

router.post('/', contactsController.createContact);
// post contact to localhost:8080/contacts/

router.put('/:id', contactsController.updateContact);
// update contact in localhost:8080/contacts/

router.delete('/:id', contactsController.deleteContact);
// delete contact in localhost:8080/contacts/

module.exports = router;
