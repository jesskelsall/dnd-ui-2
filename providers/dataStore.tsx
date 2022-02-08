import React, { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from ".";
import { DATA_STORE_TEMPLATE, SOCKET_EVENT_CHANGE } from "../consts";
import { IDataStore } from "../types";

interface IDataStoreContext {
  dataStore: IDataStore;
}

const DataStoreContext = createContext<IDataStoreContext>({
  dataStore: DATA_STORE_TEMPLATE,
});

interface IDataStoreProviderProps {
  children: React.ReactNode;
}

/**
 * Uses the socket provider to listen for data store propagation events
 * Exposes the data store to child components as a context
 * In effect, all Next.js pages will have access to an up to date data store via a socket
 */
export const DataStoreProvider = ({ children }: IDataStoreProviderProps) => {
  const [dataStore, setDataStore] = useState(DATA_STORE_TEMPLATE);
  const socket = useSocket();

  if (!socket) {
    throw new Error("DataStoreProvider must be inside SocketContext.Provider");
  }

  const onPropagation = (data: IDataStore) => setDataStore(data);

  useEffect(() => {
    socket.on(SOCKET_EVENT_CHANGE, onPropagation);

    return () => {
      socket.off(SOCKET_EVENT_CHANGE, onPropagation);
    };
  }, [socket]);

  return (
    <DataStoreContext.Provider value={{ dataStore }}>
      {children}
    </DataStoreContext.Provider>
  );
};

// Shorthand for accessing dataStore in child components
export const useDataStore = () => {
  const context = useContext(DataStoreContext);

  if (!context) {
    throw new Error("useDataStore must be inside a DataStoreProvider");
  }

  return context.dataStore;
};
