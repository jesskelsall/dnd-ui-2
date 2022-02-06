import type { NextPage } from "next";
import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormRow,
  Header,
  InputNumber,
  InputText,
  Screen,
  Slider,
} from "~/components";
import { Debug } from "~/components/Debug";
import { FormNumber } from "~/types";

interface Data {
  text: string;
  text2: string;
  number: FormNumber;
  slider: FormNumber;
}

const Home: NextPage = () => {
  const [data, setData] = useState<Data>({
    text: "",
    text2: "",
    number: null,
    slider: 10,
  });

  return (
    <Screen>
      <Header />
      <Form
        buttons={
          <>
            <Button colour="blue">Save</Button>
            <Button colour="red">Cancel</Button>
          </>
        }
        title="Form"
      >
        <FormGroup title="Form Group">
          <FormRow>
            <FormLabel>Really long text, too long in fact.</FormLabel>
            <InputText<Data>
              data={data}
              path="text"
              placeholder="Input Text"
              setter={setData}
            />
            <FormLabel>Number</FormLabel>
            <InputNumber<Data>
              data={data}
              path="number"
              placeholder="Input Number"
              setter={setData}
            />
          </FormRow>
          <FormRow>
            <FormLabel>Second</FormLabel>
            <InputText<Data>
              data={data}
              path="text2"
              placeholder="Input Text 2"
              setter={setData}
            />
            <Button>Nice!</Button>
          </FormRow>
          <FormRow>
            <FormLabel>Slider</FormLabel>
            <Slider<Data>
              data={data}
              path="slider"
              setter={setData}
              min={30}
              max={100}
              step={10}
            />
          </FormRow>
        </FormGroup>
        <Debug value={data} />
      </Form>
    </Screen>
  );
};

export default Home;
