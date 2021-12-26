import type { NextPage } from "next";
import { useContext, useState } from "react";
import styled from "styled-components";
import { SocketContext } from "../../context/socket";
import { IMapView } from "../../types";

const FullScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
`;

const Button = styled.button`
  font-size: 26px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 0.5em 1em;
`;

const imageUrl = "http://localhost:3000/map-nilsavnic.jpg";

const ControlMapPage: NextPage = () => {
  const socket = useContext(SocketContext);
  const [url, setUrl] = useState(imageUrl);
  const [scale, setScale] = useState(20);
  const [horizontal, setHorizontal] = useState(50);
  const [vertical, setVertical] = useState(50);

  // @ts-ignore
  const linkInput = (setFn) => (event) => {
    setFn(event.target.value);
  };

  const updateMap = (mapView: IMapView) => {
    console.log("Updating map", mapView);
    socket.emit("map", mapView);
  };

  return (
    <FullScreen>
      <Button
        onClick={() =>
          updateMap({
            imageUrl,
            size: 79.3,
            positionHorizontal: 50,
            positionVertical: 50,
          })
        }
      >
        Default
      </Button>
      <Button
        onClick={() =>
          updateMap({
            imageUrl,
            size: 250,
            positionHorizontal: 61.9,
            positionVertical: 67,
          })
        }
      >
        Starnov
      </Button>
      <Button
        onClick={() =>
          updateMap({
            imageUrl,
            size: 250,
            positionHorizontal: 80.4,
            positionVertical: 51.9,
          })
        }
      >
        Hochwald
      </Button>
      <p>
        URL:{" "}
        <input onChange={linkInput(setUrl)} type="text" value={url}></input>
      </p>
      <p>
        Scale:{" "}
        <input
          onChange={linkInput(setScale)}
          type="number"
          value={scale}
        ></input>
      </p>
      <p>
        Horizontal:{" "}
        <input
          onChange={linkInput(setHorizontal)}
          type="number"
          value={horizontal}
        ></input>
      </p>
      <p>
        Vertical:{" "}
        <input
          onChange={linkInput(setVertical)}
          type="number"
          value={vertical}
        ></input>
      </p>
      <Button
        onClick={() =>
          updateMap({
            imageUrl: url,
            size: scale,
            positionHorizontal: horizontal,
            positionVertical: vertical,
          })
        }
      >
        Go!
      </Button>
    </FullScreen>
  );
};

export default ControlMapPage;
