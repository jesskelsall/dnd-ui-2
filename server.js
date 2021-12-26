const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const next = require("next");

const expressApp = express();
const server = http.createServer(expressApp);
const io = new Server(server);

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const port = 3000;

io.on("connection", (socket) => {
  // Every event created by every connection is replayed to all connections
  // This allows every window to react to any change
  socket.onAny((eventName, payload) => {
    io.emit(eventName, payload);
  });
});

nextApp.prepare().then(() => {
  expressApp.get("*", (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on *:${port}`);
  });
});
