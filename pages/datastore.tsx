import { NextPage } from "next";
import { useDataStore } from "../providers";
import { Debug } from "../components/Debug";

const DataStorePage: NextPage = () => {
  const dataStore = useDataStore();

  return <Debug value={dataStore} />;
};

export default DataStorePage;
