import express from "express";
import http from "http";
import next from "next";
import { Server } from "socket.io";
import { SOCKET_EVENT_CHANGE } from "../../consts";
import { DataStore } from "./DataStore";
import { eventHandler } from "./eventHandler";

const PORT = 3000;

const expressApp = express();
const server = http.createServer(expressApp);
const io = new Server(server);

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const dataStore = new DataStore();

io.on("connection", (socket) => {
  console.info(`New socket connection made: ${socket.id}`);

  // Provide the data store as soon as a connection is made
  socket.emit(SOCKET_EVENT_CHANGE, dataStore.getData());

  // Handle all incoming socket events
  socket.onAny(eventHandler(io, dataStore));
});

nextApp.prepare().then(() => {
  expressApp.get("*", (req, res) => nextHandler(req, res));

  server.listen(PORT, () => {
    console.info(`Listening on *:${PORT}`);
  });
});
