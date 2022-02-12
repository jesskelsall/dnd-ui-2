import { randomId } from "../../functions/random";
import {
  IMap,
  IMapView,
  IMapViewDisplay,
  TMapId,
  TMapViewId,
} from "../../types";

export const MAP_VIEW_DISPLAY_TEMPLATE: IMapViewDisplay = {
  map: "",
  scale: 100,
  positionHorizontal: 50,
  positionVertical: 50,
};

export const createMap = (maps: Record<TMapId, IMap>): IMap => ({
  fileName: "",
  id: randomId(maps),
  name: "",
});

export const createMapView = (
  mapViews: Record<TMapViewId, IMapView>
): IMapView => ({
  colour: "grey",
  id: randomId(mapViews),
  name: "",
  ...MAP_VIEW_DISPLAY_TEMPLATE,
});
