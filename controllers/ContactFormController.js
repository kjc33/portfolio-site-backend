const ContactForm = require("../models/ContactFormModel");

// GET - /api/contact-form-submissions - Get All Submissions
exports.getAllContactFormSubmissions = async (req, res) => {
  try {
    const submissions = await ContactForm.findAll();
    res.status(200).json(submissions);
  } catch (error) {
    console.error("Error fetching contact form submissions:", error); // Log the error
    res.status(500).json({ message: "An error occurred while getting the contact form submissions." });
  }
};

// GET - /api/contact-form-submissions/:id - Get a Single Submission
exports.getContactFormSubmissionById = async (req, res) => {
  try {
    const submission = await ContactForm.findByPk(req.params.id);
    if (submission) {
      res.status(200).json(submission);
    } else {
      res.status(404).json({ message: "Sorry, the contact form submission cannot be found." });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while getting the contact form submission." });
  }
};

// POST - /api/contact-form-submissions - Create a New Submission
exports.createContactFormSubmission = async (req, res) => {
  try {
    const submission = await ContactForm.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      website: req.body.website,
      message: req.body.message,
    });
    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while creating the contact form submission." });
  }
};

// PUT - /api/contact-form-submissions/:id - Update a Submission
exports.updateContactFormSubmissionById = async (req, res) => {
  try {
    const submission = await ContactForm.findByPk(req.params.id);
    if (submission) {
      submission.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        message: req.body.message,
      });
      res.status(200).json(submission);
    } else {
      res.status(404).json({ message: "Sorry, the contact form submission cannot be found." });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while updating the contact form submission." });
  }
};

// DELETE - /api/contact-form-submissions/:id - Delete a Submission
exports.deleteContactFormSubmissionById = async (req, res) => {
  try {
    const submission = await ContactForm.findByPk(req.params.id);
    if (submission) {
      submission.destroy();
      res.status(200).json({ message: "Contact form submission deleted successfully!" });
    } else {
      res.status(404).json({ message: "Sorry, the contact form submission cannot be found." });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while deleting the contact form submission." });
  }
};
