import type { NextPage } from "next";
import { useState } from "react";
import { FormGroup } from "~/components/form/layout/FormGroup/FormGroup";
import { FormLabel } from "~/components/form/layout/FormLabel/FormLabel";
import { FormRow } from "~/components/form/layout/FormRow/FormRow";
import { Button, InputNumber, InputText, Slider } from "~/components";
import { FormNumber } from "~/types";
import { Debug } from "~/components/Debug";

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
    <div style={{ margin: "5rem" }}>
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
    </div>
  );
};

export default Home;
