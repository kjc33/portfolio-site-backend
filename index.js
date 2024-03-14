const express = require('express');
const { testConnection } = require('./db/conn');
console.log(testConnection);

const PORT = 8080;
const app = express();
app.use(express.json());

testConnection();

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
