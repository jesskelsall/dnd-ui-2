import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { InteractiveMap } from "../../components/display/InteractiveMap/InteractiveMap";
import { SocketContext } from "../../context/socket";
import { IMapView } from "../../types";

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
  const socket = useContext(SocketContext);
  const [mapView, setMapView] = useState<IMapView | null>(null);

  const onMapUpdated = (mapView: IMapView) => {
    console.log("Map updated!", mapView);
    setMapView(mapView);
  };

  useEffect(() => {
    socket.on("map", onMapUpdated);

    return () => {
      socket.off("map", onMapUpdated);
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
