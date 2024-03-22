const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  try {
    // Read the XML sitemap content from a file or generate it dynamically
    const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://www.kylejohnchin.com/</loc>
          <lastmod>2024-03-21</lastmod>
          <changefreq>Weekly</changefreq>
          <priority>1.0</priority>
        </url>
        <!-- Add more URLs here -->
      </urlset>`;
    res.header("Content-Type", "application/xml");
    res.send(xmlSitemap);
  } catch (error) {
    console.error("Error serving XML sitemap:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
