const sendEmail = require("../utils/email");
const nodemailer = require('nodemailer');
require('dotenv').config()

async function sendContactFormEmail(req, res) {
  // Validate request body
  if (!req.body || !req.body.first_name || !req.body.last_name || !req.body.email || !req.body.message) {
    return res.status(400).json({ message: "Missing required fields in the request body." });
  }

  try {
    const { first_name, last_name, email, phone, website, message } = req.body || {};

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.FROM_EMAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL, // This should be your verified email address
      to: process.env.TO_EMAIL, // This should be your verified email address
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p>You have received a new contact form submission:</p>
        <table border="1">
          <tr><th>Field</th><th>Value</th></tr>
          <tr><td>First Name</td><td>${first_name}</td></tr>
          <tr><td>Last Name</td><td>${last_name}</td></tr>
          <tr><td>Email</td><td>${email}</td></tr>
          <tr><td>Phone</td><td>${phone}</td></tr>
          <tr><td>Website</td><td>${website}</td></tr>
          <tr><td>Message</td><td>${message}</td></tr>
        </table>
      `
    });
    console.log("Email sent");
    res.status(200).json({ message: "Contact form submission successful. Email sent." });
  } catch (error) {
    console.error("Error sending contact form submission email:", error);
    res.status(500).json({ message: "An error occurred while processing the contact form submission." });
  }
}

module.exports = { sendContactFormEmail };
