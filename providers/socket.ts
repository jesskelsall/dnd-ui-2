import React, { useContext } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:3000";

export const socket = io(SOCKET_URL);
export const SocketContext = React.createContext(socket);

export const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useDataStore must be inside SocketContext.Provider");
  }

  return context;
};
