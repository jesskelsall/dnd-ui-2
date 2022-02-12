import {
  IMap,
  IMapView,
  IMapViewDisplay,
  TMapId,
  TMapViewId,
} from "../DataStore";

// Map Screen

export interface IActionMapScreenApply {
  action: "mapscreen-apply";
  payload: IMapViewDisplay;
}

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
