"use strict";

const express = require("express");

// Constants
const PORT = 8081;
const HOST = "127.0.0.1";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world(2)\n");
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
