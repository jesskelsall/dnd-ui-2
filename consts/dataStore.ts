import { IDataCopy, IDataStore } from "~/types";

const DATA_COPY_TEMPLATE: IDataCopy = {
  screens: {
    map: {
      display: {
        map: "",
        scale: 100,
        positionHorizontal: 50,
        positionVertical: 50,
      },
      maps: {},
      mapViews: {},
    },
  },
};

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
