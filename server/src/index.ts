import express from "express";
import http from "http";
import next from "next";
import { Server } from "socket.io";
import { PORT, SOCKET_EVENT_CHANGE } from "../../consts";
import { localImage } from "../../functions/images";
import { getRecordById } from "../../functions/records";
import { timeStringToSeconds } from "../../functions/time";
import { DataStore } from "./DataStore";
import { eventHandler } from "./eventHandler";

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
  // GET route state changes
  // Allows for Elgato Stream Deck integration

  // TODO: Generic route handler
  // TODO: Generic required param check / type assertion

  expressApp.get("/action/mapScreen/apply", (req, res) => {
    const { id } = req.query;
    if (typeof id !== "string") return res.sendStatus(400);

    // TODO export this logic out of MapViewButton as a function for reuse

    const { maps, mapViews } = dataStore.getData().copies.control.screens.map;
    const mapView = getRecordById(mapViews, id);
    if (!mapView) return res.sendStatus(404);

    const map = getRecordById(maps, mapView.map);
    if (!map) return res.sendStatus(404);

    dataStore.mapScreenApply({
      map: localImage(map.fileName),
      scale: mapView.scale,
      positionHorizontal: mapView.positionHorizontal,
      positionVertical: mapView.positionVertical,
    });
    io.emit(SOCKET_EVENT_CHANGE, dataStore.getData());

    return res.sendStatus(204);
  });

  expressApp.get("/action/timerScreen/start", (req, res) => {
    const { time } = req.query;
    if (typeof time !== "string") return res.sendStatus(400);

    const seconds = timeStringToSeconds(time);
    dataStore.timerStart(seconds);
    io.emit(SOCKET_EVENT_CHANGE, dataStore.getData());

    return res.sendStatus(204);
  });

  // Next.js page routing
  expressApp.get("*", (req, res) => nextHandler(req, res));

  server.listen(PORT, () => {
    console.info(`Listening on *:${PORT}`);
  });
});
