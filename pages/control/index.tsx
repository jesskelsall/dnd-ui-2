import type { NextPage } from "next";
import { Form, NavButton, NoContent } from "../../components";

const ControlPage: NextPage = () => (
  <Form
    buttons={<NavButton href="control/mapScreen" key="mapScreen" />}
    title="Control"
  >
    <NoContent>TODO</NoContent>
  </Form>
);

export default ControlPage;
