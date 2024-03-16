require('dotenv').config();
const express = require("express");
const { testConnection } = require("./db/conn");
const cors = require("cors");
const ContactFormRoutes = require("./routes/ContactFormRoutes");
const ContactFormEmailNotifications = require("./controllers/ContactFormEmailNotificationController");
const errorHandler = require("./middlewares/ErrorMiddleware");

const PORT = 8080;
const app = express();

testConnection();
app.use(express.json());
app.use(cors());

// Use Routes
app.use(process.env.CONTACT_FORM_ROUTES, ContactFormRoutes);

// Post Routes
app.post(process.env.SEND_EMAIL_ENDPOINT, ContactFormEmailNotifications.sendContactFormEmail);

// Error Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
