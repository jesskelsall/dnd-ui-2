import { IDataStore } from "../DataStore";

export interface IActionDataStoreImport {
  action: "datastore-import";
  payload: IDataStore;
}
