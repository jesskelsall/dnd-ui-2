import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import {
  EditorForm,
  FormGroup,
  FormLabel,
  FormRow,
  InputText,
} from "../../../../components";
import { localImage, updateDataStore } from "../../../../functions";
import { useDataStore, useSocket } from "../../../../providers";
import { IMap, IPage } from "../../../../types";

interface IMapPreviewProps {
  image: string;
}

const MapPreview = styled.div<IMapPreviewProps>`
  flex: 1;
  height: 100%;
  min-height: 500px;
  background-image: url("${(props) => props.image}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const MapPage: IPage = () => {
  const router = useRouter();
  const socket = useSocket();
  const { dataStore } = useDataStore();

  const { mapId } = router.query;
  const originalMap = dataStore.copies.control.screens.map.maps[`${mapId}`];

  const [map, setMap] = useState(originalMap);

  const setMapAction = (actionMap: IMap) =>
    updateDataStore(socket, {
      action: "map-set",
      payload: actionMap,
    });

  return (
    <EditorForm
      actionSet={setMapAction}
      data={map}
      dataOriginal={originalMap}
      type="Map"
    >
      <FormGroup>
        <FormRow>
          <FormLabel>Name</FormLabel>
          <InputText data={map} path="name" setter={setMap} />
        </FormRow>
        <FormRow>
          <FormLabel>File Name</FormLabel>
          <InputText data={map} path="fileName" setter={setMap} />
        </FormRow>
      </FormGroup>
      <FormGroup flex title="Preview">
        {map.fileName && <MapPreview image={localImage(map.fileName)} />}
      </FormGroup>
    </EditorForm>
  );
};

MapPage.collectionSelector = (dataCopy) => dataCopy.screens.map.maps;

export default MapPage;
