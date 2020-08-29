const express = require("express");

const projectRouter = require("./project/projectRouter");

const server = express();
server.use(express.json());

server.use("/api", projectRouter);

server.get("/", (req, res) => {
    res.status(200).json({SERVER: "server running"})
})

module.exports = server