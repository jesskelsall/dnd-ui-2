import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { InteractiveMap } from "../../components/display/InteractiveMap/InteractiveMap";
import { SOCKET_EVENT_CHANGE } from "../../consts";
import { useSocket } from "../../providers/socket";
import { IDataStore, IMapView } from "../../types";

const FullScreen = styled.div`
  height: 100vh;
`;

const Target = styled.div`
  position: absolute;
  background-color: rgba(255, 0, 0, 0.3);
  width: 20px;
  height: 20px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DisplayMapPage: NextPage = () => {
  const socket = useSocket();
  const [mapView, setMapView] = useState<IMapView | null>(null);

  const onMapUpdated = (mapView: IMapView) => {
    console.log("Map updated!", mapView);
    setMapView(mapView);
  };

  const onPropagation = (data: IDataStore) => console.log(data);

  useEffect(() => {
    socket.on(SOCKET_EVENT_CHANGE, onPropagation);
    socket.on("map", onMapUpdated);

    return () => {
      socket.off("map", onMapUpdated);
      socket.off(SOCKET_EVENT_CHANGE, onPropagation);
    };
  }, []);

  return (
    <FullScreen>
      {/* <Target /> */}
      {mapView && (
        <InteractiveMap
          imageUrl={mapView.imageUrl}
          scale={mapView.scale}
          positionHorizontal={mapView.positionHorizontal}
          positionVertical={mapView.positionVertical}
        />
      )}
    </FullScreen>
  );
};

export default DisplayMapPage;
