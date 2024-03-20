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
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission from ${first_name} ${last_name}`,
      html: `
      <h2 style="color: #333;">New Contact Form Submission from ${first_name} ${last_name}</h2>
      <p style="font-size: 16px;">You have received a new contact form submission:</p>
      <table border="1" style="border-collapse: collapse;">
        <tr style="text-align: left;"><th style="padding: 10px; background-color: #dcdcdc; width: 80px;">Field</th><th style="padding: 10px; background-color: #dcdcdc;">Value</th></tr>
        <tr><td style="padding: 10px;">First Name</td><td style="padding: 10px;">${first_name}</td></tr>
        <tr><td style="padding: 10px;">Last Name</td><td style="padding: 10px;">${last_name}</td></tr>
        <tr><td style="padding: 10px;">Email</td><td style="padding: 10px;">${email}</td></tr>
        <tr><td style="padding: 10px;">Phone</td><td style="padding: 10px;">${phone}</td></tr>
        <tr><td style="padding: 10px;">Website</td><td style="padding: 10px;">${website}</td></tr>
        <tr><td style="padding: 10px;">Message</td><td style="padding: 10px;">${message}</td></tr>
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
