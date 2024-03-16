const express = require("express");
const router = express.Router();
const ContactFormEmailNotifications = require("../controllers/ContactFormEmailNotificationController");

const sendEmailEndpoint = process.env.SEND_EMAIL_ENDPOINT

router.post(sendEmailEndpoint, ContactFormEmailNotifications.sendContactFormEmail);

module.exports = router;
