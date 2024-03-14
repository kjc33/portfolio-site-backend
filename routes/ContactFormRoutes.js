const express = require('express');
const router = express.Router();
const ContactFormController = require('../controllers/ContactFormController');

// GET - /api/contact-form-submissions - Get All Submissions
router.get("/", ContactFormController.getAllContactFormSubmissions);

// GET - /api/contact-form-submissions/:id - Get a Single Submission
router.get("/:id", ContactFormController.getContactFormSubmissionById);

// POST - /api/contact-form-submissions - Create a New Submission
router.post("/", ContactFormController.createContactFormSubmission);

// PUT - /api/contact-form-submissions/:id - Update a Submission
router.put("/:id", ContactFormController.updateContactFormSubmissionById);

// DELETE - /api/contact-form-submissions/:id - Delete a Submission
router.delete("/:id", ContactFormController.deleteContactFormSubmissionById);

module.exports = router;