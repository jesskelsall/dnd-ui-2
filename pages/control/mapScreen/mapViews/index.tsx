import _ from "lodash/fp";
import { NextPage } from "next";
import { CRUD } from "../../../../components";
import { createMapView } from "../../../../consts";
import { getRecordName, updateDataStore } from "../../../../functions";
import { useDataStore, useSocket } from "../../../../providers";
import { IMapView, TMapViewId } from "../../../../types";

const MapViewsPage: NextPage = () => {
  const socket = useSocket();
  const { dataStore } = useDataStore();

  const deleteMapView = (mapViewId: TMapViewId) =>
    updateDataStore(socket, {
      action: "mapview-delete",
      payload: mapViewId,
    });

  const setMapView = (mapView: IMapView) =>
    updateDataStore(socket, {
      action: "mapview-set",
      payload: mapView,
    });

  return (
    <CRUD<IMapView>
      actionDelete={deleteMapView}
      actionSet={setMapView}
      columns={[
        {
          display: (mapView) => mapView.name,
          title: "Name",
        },
        {
          display: (mapView) =>
            getRecordName(
              dataStore.copies.control.screens.map.maps,
              mapView.map
            ),
          title: "Map",
        },
      ]}
      data={dataStore.copies.control.screens.map.mapViews}
      sortBy={["name"]}
      recordTemplate={createMapView}
      title="Map Views"
    />
  );
};

export default MapViewsPage;
