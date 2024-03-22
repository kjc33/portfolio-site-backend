const express = require('express');
const router = express.Router();
const app = express();

app.get('/sitemap.xml', (req, res) => {
 res.header('Content-Type', 'application/xml');
 res.send(`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.kylejohnchin.com/</loc>
        <lastmod>2024-03-21</lastmod>
        <changefreq>Weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <!-- Add more URLs here -->
    </urlset>
 `);
});

module.exports = router;
