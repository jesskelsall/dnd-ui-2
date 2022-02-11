import { NextPage } from "next";
import { useDataStore } from "../../providers";
import { Debug } from "../../components/Debug";

const DataPage: NextPage = () => {
  const { dataStore } = useDataStore();

  return <Debug value={dataStore} />;
};

export default DataPage;
