const express = require("express");
const path = require('node:path');
const app = express();
const PORT = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));n
});

app.listen(PORT);
console.log("Уcпех")