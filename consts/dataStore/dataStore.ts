import { IDataStore } from "../../types";
import { DATA_COPY_TEMPLATE } from "./dataCopy";

export const DATA_STORE_TEMPLATE: IDataStore = {
  copies: {
    control: DATA_COPY_TEMPLATE,
    display: DATA_COPY_TEMPLATE,
  },
  sync: {
    changes: false,
    realTime: true,
  },
};
