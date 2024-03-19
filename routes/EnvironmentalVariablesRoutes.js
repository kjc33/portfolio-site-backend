const express = require("express");
const router = express.Router();

router.get("/api/env", (req, res) => {
  try {
    // Retrieve environment variables from your backend's environment
    const envVariables = {
      CONTACT_FORM_ROUTES: process.env.CONTACT_FORM_ROUTES,
    };

    // Send environment variables as JSON response
    res.json(envVariables);
  } catch (error) {
    // Handle any errors that occur during the retrieval or sending of environment variables
    console.error("Error fetching environment variables:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
