import express from "express";
import http from "http";
import next from "next";
import { Server } from "socket.io";

const PORT = 3000;

const expressApp = express();
const server = http.createServer(expressApp);
const io = new Server(server);

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on("connection", (socket) => {
  // Every event created by every connection is replayed to all connections
  // This allows every window to react to any change
  socket.onAny((eventName, payload) => {
    io.emit(eventName, payload);
  });
});

nextApp.prepare().then(() => {
  expressApp.get("*", (req, res) => nextHandler(req, res));

  server.listen(PORT, () => {
    console.info(`Listening on *:${PORT}`);
  });
});

interface One {
  name: "one";
  shape: number[];
}

interface Two {
  name: "two";
  shape: string;
}

type Numbers = One | Two;

const handleNumbers = (n: Numbers): void => {
  switch (n.name) {
    case "one":
      console.log(n.shape);
      break;
    default:
      console.log("nope");
  }
};

// per action:
// - class method argument type (object if multiple properties are needed)
// - class method, typed with the above
// - interface with _type (specific string) and params (use class method type)

// for all actions:
// - composite type of all the interfaces - this will be the socket payload
// - socket handler function that handles each _type and runs the relevant action
//   - must handle get request first
//   - switch statement
//   - default case should throw an error
// - each action ends with the updated data object being emitted to all clients
// - type safeguarding function for socket emit on the front end
//   - pass in socket object and the payload object (_type, params)

// listening to events:
// - every page in Next.js will need access to the data object
// - request it when the page is loaded
// - listen for it when emitted to all socket connections
// - should happen as part of the page template
//   - object is passed down into each page component
//   - does each page need TS type extension to allow this property to be set?

// other:
// - explore ways of having _app.tsx do different things on different routes
