import _ from "lodash/fp";
import { NextPage } from "next";
import {
  Form,
  FormGroup,
  FormRowButtons,
  MapViewButton,
  NavButton,
} from "../../../components";
import { useDataStore, useSocket } from "../../../providers";
import { IMapView, TMaterialColour } from "../../../types";

export const ORDERED_COLOURS: TMaterialColour[] = [
  "grey",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
];

const MapScreenPage: NextPage = () => {
  const socket = useSocket();
  const { dataStore } = useDataStore();
  const { map: mapScreen } = dataStore.copies.control.screens;

  const mapNames = _.fromPairs(
    Object.values(mapScreen.maps).map((map) => [map.id, map.name])
  );

  const getMapName = (mapView: IMapView) => mapNames[mapView.map] || "";

  const maps: IMapView[][] = _.flow(
    _.sortBy([
      getMapName,
      (mapView: IMapView) => ORDERED_COLOURS.indexOf(mapView.colour),
      "name",
    ]),
    _.groupBy("map"),
    _.values
  )(mapScreen.mapViews);

  return (
    <Form
      buttons={
        <>
          <NavButton href="mapScreen/maps" key="maps" />
          <NavButton href="mapScreen/mapViews" key="mapViews" />
        </>
      }
      title="Map Screen"
    >
      {maps.map((mapViews) => (
        <FormGroup key={mapViews[0].map} title={getMapName(mapViews[0])}>
          <FormRowButtons>
            {mapViews.map((mapView) => (
              <MapViewButton
                dataStore={dataStore}
                key={mapView.id}
                mapView={mapView}
                socket={socket}
              />
            ))}
          </FormRowButtons>
        </FormGroup>
      ))}
    </Form>
  );
};

export default MapScreenPage;
