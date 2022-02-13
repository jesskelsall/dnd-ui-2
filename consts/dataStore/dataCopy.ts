import { IDataCopy } from "../../types";
import { MAP_VIEW_DISPLAY_TEMPLATE } from "./mapScreen";
import { TIMER_SCREEN_TEMPLATE } from "./timerScreen";

export const DATA_COPY_TEMPLATE: IDataCopy = {
  screens: {
    map: {
      display: MAP_VIEW_DISPLAY_TEMPLATE,
      maps: {},
      mapViews: {},
    },
    timer: TIMER_SCREEN_TEMPLATE,
  },
};
