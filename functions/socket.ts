import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { SOCKET_EVENT_ACTION } from "../consts/socket";
import { TAction } from "../types";

export const updateDataStore = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap>,
  action: TAction
): void => {
  socket.emit(SOCKET_EVENT_ACTION, action);
};
