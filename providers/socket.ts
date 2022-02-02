import { connect } from "socket.io-client";
import React from "react";

const SOCKET_URL = "http://localhost:3000";

export const socket = connect(SOCKET_URL);
export const SocketContext = React.createContext(socket);
