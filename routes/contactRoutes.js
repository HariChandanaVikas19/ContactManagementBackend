const express = require("express");

const { getAllContacts, getContact, createContact, updateContact, deleteContact } = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
// //! get all contacts
// router.route("/").get(getAllContacts);
// //! get a single contact
// router.route("/:id").get(getContact);
// //! post/create a contact
// router.route("/").post(createContact);
// //! update the contact
// router.route("/:id").put(updateContact);
// //! delete the contact
// router.route("/:id").delete(deleteContact)
// module.exports = router;
router.use(validateToken);
router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)
module.exports = router;