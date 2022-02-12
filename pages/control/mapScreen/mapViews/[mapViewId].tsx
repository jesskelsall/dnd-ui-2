import { useRouter } from "next/router";
import { useState } from "react";
import {
  Button,
  EditorForm,
  ForeignKeyDropdown,
  FormGroup,
  FormLabel,
  FormRow,
  InputText,
  Slider,
} from "../../../../components";
import { updateDataStore } from "../../../../functions";
import { useDataStore, useSocket } from "../../../../providers";
import { IMapView, IPage } from "../../../../types";

const MapViewPage: IPage = () => {
  const router = useRouter();
  const socket = useSocket();
  const { dataStore } = useDataStore();

  const { mapViewId } = router.query;
  const originalMapView =
    dataStore.copies.control.screens.map.mapViews[`${mapViewId}`];

  const [mapView, setMapView] = useState(originalMapView);

  const setMapViewAction = (actionMapView: IMapView) =>
    updateDataStore(socket, {
      action: "mapview-set",
      payload: actionMapView,
    });

  return (
    <EditorForm
      actionSet={setMapViewAction}
      data={mapView}
      dataOriginal={originalMapView}
      type="Map View"
    >
      <FormGroup title="Details">
        <FormRow>
          <FormLabel>Name</FormLabel>
          <InputText data={mapView} path="name" setter={setMapView} />
        </FormRow>
        <FormRow>
          <FormLabel>Map</FormLabel>
          <ForeignKeyDropdown
            collection={dataStore.copies.control.screens.map.maps}
            data={mapView}
            path="map"
            placeholder="Choose a map..."
            setter={setMapView}
          />
        </FormRow>
      </FormGroup>
      <FormGroup title="Position">
        <FormRow>
          <FormLabel>Scale (%)</FormLabel>
          <Slider
            data={mapView}
            max={300}
            min={50}
            path="scale"
            setter={setMapView}
            step={5}
          />
        </FormRow>
        <FormRow>
          <FormLabel>Horizontal (%)</FormLabel>
          <Slider
            data={mapView}
            max={100}
            min={0}
            path="positionHorizontal"
            setter={setMapView}
            step={5}
          />
        </FormRow>
        <FormRow>
          <FormLabel>Vertical (%)</FormLabel>
          <Slider
            data={mapView}
            max={100}
            min={0}
            path="positionVertical"
            setter={setMapView}
            step={5}
          />
        </FormRow>
        <FormRow>
          <FormLabel />
          <Button colour="blue" wide>
            Apply Now
          </Button>
        </FormRow>
      </FormGroup>
    </EditorForm>
  );
};

MapViewPage.collectionSelector = (dataCopy) => dataCopy.screens.map.mapViews;

export default MapViewPage;
