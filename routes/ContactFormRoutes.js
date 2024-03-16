const express = require('express');
const router = express.Router();
const ContactFormController = require('../controllers/ContactFormController');
const ContactFormEmailNotifications = require('../controllers/ContactFormEmailNotificationController');

// GET - Get All Submissions
router.get("/", ContactFormController.getAllContactFormSubmissions);

// GET - Get a Single Submission
router.get("/:id", ContactFormController.getContactFormSubmissionById);

// POST - Create a New Submission
router.post("/", ContactFormController.createContactFormSubmission);

// PUT - Update a Submission
router.put("/:id", ContactFormController.updateContactFormSubmissionById);

// DELETE - Delete a Submission
router.delete("/:id", ContactFormController.deleteContactFormSubmissionById);

// POST - Send an Email with Contact Form Submission Details
router.post(process.env.SEND_EMAIL_ENDPOINT, ContactFormEmailNotifications.sendContactFormEmail);

module.exports = router;