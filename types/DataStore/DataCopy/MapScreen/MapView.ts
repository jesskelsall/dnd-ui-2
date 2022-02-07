import { TMapId } from "./Map";

export type TMapViewId = string;

export interface IMapViewDisplay {
  map: TMapId;
  scale: number;
  positionHorizontal: number;
  positionVertical: number;
}

export interface IMapView extends IMapViewDisplay {
  id: TMapViewId;
  name: string;
}
