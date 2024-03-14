const express = require("express");

function errorHandler(err, req, res, next) {
  // Check if the error has a status code
  if (err.statusCode) {
    // Send error response with status code and message
    res.status(err.statusCode).json({ error: err.message });
  } else {
    // Treat as server error and send generic error message
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = errorHandler;
