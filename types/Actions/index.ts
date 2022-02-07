import {
  IActionMapDelete,
  IActionMapSet,
  IActionMapViewDelete,
  IActionMapViewSet,
} from "./mapScreen";

export type TAction =
  | IActionMapDelete
  | IActionMapSet
  | IActionMapViewDelete
  | IActionMapViewSet;

export * from "./mapScreen";

export interface IServerToClientEvents {
  noArg: () => void;
}

export interface IClientToServerEvents {
  hello: () => void;
}
