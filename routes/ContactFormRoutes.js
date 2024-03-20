const express = require("express");
const router = express.Router();
const ContactFormController = require("../controllers/ContactFormController");

// GET - Thank You Page - CONTACT_FORM_ROUTES URL + /thank-you from .env 
router.get("/thank-you", (req, res) => {
  res.send("Thank you for your submission!");
});

// GET - Get All Submissions
// router.get("/", ContactFormController.getAllContactFormSubmissions);

// GET - Get a Single Submission
// router.get("/:id", ContactFormController.getContactFormSubmissionById);

// POST - Create a New Submission
router.post("/", ContactFormController.createContactFormSubmission);

// PUT - Update a Submission
// router.put("/:id", ContactFormController.updateContactFormSubmissionById);

// DELETE - Delete a Submission
// router.delete("/:id", ContactFormController.deleteContactFormSubmissionById);

module.exports = router;
