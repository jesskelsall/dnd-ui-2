import { IMapScreen } from "./MapScreen";
import { ITimerScreen } from "./TimerScreen";

export interface IDataCopy {
  screens: {
    map: IMapScreen;
    timer: ITimerScreen;
  };
}
