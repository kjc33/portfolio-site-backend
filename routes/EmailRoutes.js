const express = require("express");
const router = express.Router();
const ContactFormEmailNotifications = require("../controllers/ContactFormEmailNotificationController");

router.post("/", ContactFormEmailNotifications.sendContactFormEmail);

module.exports = router;
