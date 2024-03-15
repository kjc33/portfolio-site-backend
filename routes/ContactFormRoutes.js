const express = require('express');
const router = express.Router();
const ContactFormController = require('../controllers/ContactFormController');
const ContactFormEmailNotifications = require('../controllers/ContactFormEmailNotificationController');

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

// POST - /send-email - Send an Email with Contact Form Submission Details
router.post('/send-email', ContactFormEmailNotifications.sendContactFormEmail);

module.exports = router;