import { Server } from "socket.io";
import { SOCKET_EVENT_ACTION, SOCKET_EVENT_CHANGE } from "../../consts";
import { TAction } from "../../types";
import { DataStore } from "./DataStore";

/**
 * Exhaustive list of actions mapped onto the corresponding data store class methods
 * Ensures that each class method's argument type matches the action payload
 */
const handleAction = (dataStore: DataStore, event: TAction): void => {
  switch (event.action) {
    case "datastore-import":
      dataStore.dataStoreImport(event.payload);
      break;
    case "map-delete":
      dataStore.mapDelete(event.payload);
      break;
    case "map-set":
      dataStore.mapSet(event.payload);
      break;
    case "mapscreen-apply":
      dataStore.mapScreenApply(event.payload);
      break;
    case "mapview-delete":
      dataStore.mapViewDelete(event.payload);
      break;
    case "mapview-set":
      dataStore.mapViewSet(event.payload);
      break;
    case "sync-applychanges":
      dataStore.syncApplyChanges();
      break;
    case "sync-set-realtime":
      dataStore.syncSetRealTime(event.payload);
      break;
    default:
      // @ts-expect-error Disallowed action strings need handling
      throw new Error(`Unknown action requested: ${event.action}`);
  }
};

export const eventHandler =
  (io: Server, dataStore: DataStore) =>
  (eventName: string, payload: unknown) => {
    // Actions
    if (eventName === SOCKET_EVENT_ACTION) {
      handleAction(dataStore, payload as TAction);

      // Propagate the modified data store to all socket connections
      io.emit(SOCKET_EVENT_CHANGE, dataStore.getData());
      return;
    }

    throw new Error(`Unhandled event: ${eventName}`);
  };
