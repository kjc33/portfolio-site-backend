const sendEmail = require("../utils/email");

async function sendContactFormEmail(req, res) {
  // Validate request body
  if (!req.body || !req.body.first_name || !req.body.last_name || !req.body.email || !req.body.message) {
    return res.status(400).json({ message: "Missing required fields in the request body." });
  }

  try {
    const { first_name, last_name, email, phone, website, message } = req.body || {};

    // Handle undefined values gracefully
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p>You have received a new contact form submission:</p>
      <table border="1">
        <tr><th>Field</th><th>Value</th></tr>
        <tr><td>First Name</td><td>${first_name || ""}</td></tr>
        <tr><td>Last Name</td><td>${last_name || ""}</td></tr>
        <tr><td>Email</td><td>${email || ""}</td></tr>
        <tr><td>Phone</td><td>${phone || ""}</td></tr>
        <tr><td>Website</td><td>${website || ""}</td></tr>
        <tr><td>Message</td><td>${message || ""}</td></tr>
      </table>
    `;

    // Check environment variables
    if (!process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
      return res.status(500).json({ message: "Email configuration is missing." });
    }

    const emailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission from ${first_name} ${last_name}`,
      html: emailBody,
    };

    await sendEmail(emailOptions);

    res.status(200).json({ message: "Contact form submission successful. Email sent." });
  } catch (error) {
    console.error("Error sending contact form submission email:", error);
    res.status(500).json({ message: "An error occurred while processing the contact form submission." });
  }
}

module.exports = { sendContactFormEmail };
