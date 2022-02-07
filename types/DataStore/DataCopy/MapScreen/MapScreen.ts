import { IMap, TMapId } from "./Map";
import { IMapView, IMapViewDisplay, TMapViewId } from "./MapView";

export interface IMapScreen {
  display: IMapViewDisplay;
  maps: Record<TMapId, IMap>;
  mapViews: Record<TMapViewId, IMapView>;
}
