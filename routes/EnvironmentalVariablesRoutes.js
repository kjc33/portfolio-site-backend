const express = require('express');
const router = express.Router();
const app = express();

app.get('/api/env', (req, res) => {
  // Retrieve environment variables from your backend's environment
  const envVariables = {
    BACKEND_API: process.env.CONTACT_FORM_ROUTES
  };

  // Send environment variables as JSON response
  res.json(envVariables);
});

module.exports = router;
