import { IActionDataStoreImport } from "./import";
import {
  IActionMapDelete,
  IActionMapScreenApply,
  IActionMapSet,
  IActionMapViewDelete,
  IActionMapViewSet,
} from "./mapScreen";
import { IActionSyncApplyChanges, IActionSyncSetRealTime } from "./sync";

export type TAction =
  | IActionDataStoreImport
  | IActionMapDelete
  | IActionMapScreenApply
  | IActionMapSet
  | IActionMapViewDelete
  | IActionMapViewSet
  | IActionSyncApplyChanges
  | IActionSyncSetRealTime;

export * from "./import";
export * from "./mapScreen";
export * from "./sync";
