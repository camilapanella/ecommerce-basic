const express = require("express");
const morgan = require("morgan");

const server = express();
const cors = require('cors')

server.use(express.json());
server.use(morgan("dev"));
server.use(cors())

server.use("/", require("./routes"));

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});


module.exports = server;