import { IDataRecord } from "../../DataRecord";
import { TMapId } from "./Map";

export type TMapViewId = string;

export interface IMapViewDisplay {
  map: TMapId;
  scale: number;
  positionHorizontal: number;
  positionVertical: number;
}

export type IMapView = IDataRecord & IMapViewDisplay;
