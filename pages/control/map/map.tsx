import { NextPage } from "next";
import { CRUD } from "../../../components";

interface DataRecord {
  id: string;
  name: string;
  race: string;
  class: string;
}

const data: Record<string, DataRecord> = {
  a0e91728adebc755: {
    id: "a0e91728adebc755",
    name: "Marik Kaligavone",
    race: "Goliath",
    class: "Druid",
  },
  aded641403679876: {
    id: "aded641403679876",
    name: "Keranios",
    race: "Minotaur",
    class: "Fighter",
  },
  c131852c084e8caf: {
    id: "c131852c084e8caf",
    name: "Vētrall Astérr",
    race: "Elf (Wood) / Genasi (Air)",
    class: "Bard",
  },
  efc4ec7310ac17d6: {
    id: "efc4ec7310ac17d6",
    name: "Valan Shadowgaze",
    race: "Elf (Drow)",
    class: "Ranger",
  },
};

const MapPage: NextPage = () => {
  const sendCreate = (id: string, baseId?: string) =>
    console.log("sendCreate", { id, baseId });
  const sendDelete = (id: string) => console.log("sendDelete", { id });

  return (
    <CRUD<DataRecord>
      columns={[
        {
          display: (record) => record.name,
          title: "Name",
        },
        {
          display: (record) => record.race,
          title: "Race",
        },
        {
          display: (record) => record.class,
          title: "Class",
        },
      ]}
      data={data}
      linkBase="character"
      sendCreate={sendCreate}
      sendDelete={sendDelete}
      sortBy={["name"]}
      title="CRUD"
    />
  );
};

export default MapPage;
