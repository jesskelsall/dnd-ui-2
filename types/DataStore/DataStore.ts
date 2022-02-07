import { IDataCopy } from "./DataCopy";
import { IDataSync } from "./DataSync";

export interface IDataStore {
  copies: {
    control: IDataCopy;
    display: IDataCopy;
  };
  sync: IDataSync;
}
