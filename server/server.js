const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

const port = parseInt(process.env.PORT, 10) || 5000;

// Set port
app.set("port", port);

app.use(logger("dev"));

app.use(express.static("public"));

// Use logger
app.use(logger("dev"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "public", "index.html"));
});

// Have app listen to port ####
app.listen(port, () => console.log(`Server up! Listening on port ${port}`));
