import { NextPage } from "next";
import { Form, NavButton, NoContent } from "../../../components";

const MapScreenPage: NextPage = () => (
  <Form
    buttons={
      <>
        <NavButton href="mapScreen/maps" key="maps" />
        <NavButton href="mapScreen/mapViews" key="mapViews" />
      </>
    }
    title="Map Screen"
  >
    <NoContent>TODO</NoContent>
  </Form>
);

export default MapScreenPage;
