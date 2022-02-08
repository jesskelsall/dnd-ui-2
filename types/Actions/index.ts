import {
  IActionMapDelete,
  IActionMapSet,
  IActionMapViewDelete,
  IActionMapViewSet,
} from "./mapScreen";
import { IActionSyncApplyChanges, IActionSyncSetRealTime } from "./sync";

export type TAction =
  | IActionMapDelete
  | IActionMapSet
  | IActionMapViewDelete
  | IActionMapViewSet
  | IActionSyncApplyChanges
  | IActionSyncSetRealTime;

export * from "./mapScreen";
export * from "./sync";
