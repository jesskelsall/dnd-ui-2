import { IActionDataStoreImport } from "./import";
import {
  IActionMapDelete,
  IActionMapScreenApply,
  IActionMapSet,
  IActionMapViewDelete,
  IActionMapViewSet,
} from "./mapScreen";
import { IActionSyncApplyChanges, IActionSyncSetRealTime } from "./sync";
import {
  IActionTimerClear,
  IActionTimerPause,
  IActionTimerPrepare,
  IActionTimerResume,
  IActionTimerStart,
} from "./timerScreen";

export type TAction =
  | IActionDataStoreImport
  | IActionMapDelete
  | IActionMapScreenApply
  | IActionMapSet
  | IActionMapViewDelete
  | IActionMapViewSet
  | IActionSyncApplyChanges
  | IActionSyncSetRealTime
  | IActionTimerClear
  | IActionTimerPause
  | IActionTimerPrepare
  | IActionTimerResume
  | IActionTimerStart;

export * from "./import";
export * from "./mapScreen";
export * from "./sync";
export * from "./timerScreen";
