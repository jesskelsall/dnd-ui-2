import { IMap, IMapView, TMapId, TMapViewId } from "../DataStore";

// Map

export interface IActionMapDelete {
  action: "map-delete";
  payload: TMapId;
}

export interface IActionMapSet {
  action: "map-set";
  payload: IMap;
}

// MapView

export interface IActionMapViewDelete {
  action: "mapview-delete";
  payload: TMapViewId;
}

export interface IActionMapViewSet {
  action: "mapview-set";
  payload: IMapView;
}
