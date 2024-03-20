require("dotenv").config();
const express = require("express");
const { testConnection } = require("./db/conn");
const cors = require("cors");
const ContactFormRoutes = require("./routes/ContactFormRoutes");
const EmailRoutes = require("./routes/EmailRoutes");
const EnvironmentalVariablesRoutes = require("./routes/EnvironmentalVariablesRoutes");
const errorHandler = require("./middlewares/ErrorMiddleware");

const PORT = 8080;
const app = express();

testConnection();
app.use(express.json());
app.use(cors());

// Use Routes
// app.use(process.env.CONTACT_FORM_ROUTES, ContactFormRoutes);
// app.use(EnvironmentalVariablesRoutes);
app.use("/api/contact", ContactFormRoutes);
app.use("/api/contact-form", EmailRoutes);

// Error Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
