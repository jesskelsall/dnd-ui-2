import { NextPage } from "next";
import { InteractiveMap } from "../../components/display";
import { useDataStore } from "../../providers";

const MapScreen: NextPage = () => {
  const { dataStore } = useDataStore();
  const { display } = dataStore.copies.display.screens.map;

  return (
    <InteractiveMap
      imageUrl={display.map}
      scale={display.scale}
      positionHorizontal={display.positionHorizontal}
      positionVertical={display.positionVertical}
    />
  );
};

export default MapScreen;
