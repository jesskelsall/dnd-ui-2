import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import _ from "lodash/fp";
import { Button } from "../../../framework";
import { IDataStore, IMapView, IMapViewDisplay } from "../../../../types";
import {
  getRecordById,
  localImage,
  updateDataStore,
} from "../../../../functions";

export interface IMapViewButtonProps {
  dataStore: IDataStore;
  mapView: IMapView;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const MapViewButton = ({
  dataStore,
  mapView,
  socket,
}: IMapViewButtonProps) => {
  const map = getRecordById(
    dataStore.copies.control.screens.map.maps,
    mapView.map
  );

  const mapViewDisplay: IMapViewDisplay = {
    map: map ? localImage(map.fileName) : "",
    scale: mapView.scale,
    positionHorizontal: mapView.positionHorizontal,
    positionVertical: mapView.positionVertical,
  };

  const isCurrentDisplay = _.isEqual(
    mapViewDisplay,
    dataStore.copies.control.screens.map.display
  );

  const applyMapView = () => {
    updateDataStore(socket, {
      action: "mapscreen-apply",
      payload: mapViewDisplay,
    });
  };

  return (
    <Button
      colour={mapView.colour}
      disabled={!mapViewDisplay.map}
      onClick={applyMapView}
      outline={isCurrentDisplay}
    >
      {mapView.name}
    </Button>
  );
};
