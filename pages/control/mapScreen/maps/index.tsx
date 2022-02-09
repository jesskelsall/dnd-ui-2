import { NextPage } from "next";
import { CRUD } from "../../../../components";
import { createMap } from "../../../../consts";
import { updateDataStore } from "../../../../functions";
import { useDataStore, useSocket } from "../../../../providers";
import { IMap, TMapId } from "../../../../types";

const MapsPage: NextPage = () => {
  const socket = useSocket();
  const dataStore = useDataStore();

  const deleteMap = (mapId: TMapId) =>
    updateDataStore(socket, {
      action: "map-delete",
      payload: mapId,
    });

  const setMap = (map: IMap) =>
    updateDataStore(socket, {
      action: "map-set",
      payload: map,
    });

  return (
    <CRUD<IMap>
      actionDelete={deleteMap}
      actionSet={setMap}
      columns={[
        {
          display: (map) => map.name,
          title: "Name",
        },
      ]}
      data={dataStore.copies.control.screens.map.maps}
      sortBy={["name"]}
      recordTemplate={createMap}
      title="Maps"
    />
  );
};

export default MapsPage;
