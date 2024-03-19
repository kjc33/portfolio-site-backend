const express = require("express");
const router = express.Router();

router.get("/api/env", (req, res) => {
  // Retrieve environment variables from your backend's environment
  const envVariables = {
    CONTACT_FORM_ROUTES: process.env.CONTACT_FORM_ROUTES,
  };

  // Send environment variables as JSON response
  res.json(envVariables);
});

module.exports = router;
