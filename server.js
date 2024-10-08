const express = require("express");
const server = express();
const port = 9999;

server.get("/", (req, res) => {
  res.send("Hello World!");
});

// 127.0.0.1 - localhost
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
