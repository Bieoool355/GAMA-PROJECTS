const express = require("express");
const cors = require("cors");

const server = express();
const PORT = 8080;

server.use(express.json());
server.use(cors()); // Cors é uma validação

// GET - Pegar/requerer uma informação/um dado.

server.get("/", (request, response) => {
  response.sendStatus(200);
});
