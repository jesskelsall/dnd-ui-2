import { ComponentMeta, ComponentStory } from "@storybook/react";
import _ from "lodash/fp";
import { themeDecorator } from "../../../../.storybook/decorators";
import { Button } from "../../controls";
import { InputNumber, InputText, Slider } from "../../data";
import { FormLabel } from "../FormLabel";
import { FormRow } from "../FormRow";
import { FormGroup } from "./FormGroup";

export default {
  title: "Framework/Layout/FormGroup",
  component: FormGroup,
  argTypes: {
    title: {
      control: "text",
      description: "The title to display at the top of the form group.",
    },
  },
  decorators: [themeDecorator()],
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => (
  <FormGroup {...args} />
);

const children = (
  <>
    <FormRow>
      <FormLabel>Text</FormLabel>
      <InputText data={{ text: "" }} path="text" setter={_.noop} />
    </FormRow>
    <FormRow>
      <FormLabel>Number</FormLabel>
      <InputNumber data={{ number: 0 }} path="number" setter={_.noop} />
      <Button>Button</Button>
    </FormRow>
    <FormRow>
      <FormLabel>Slider</FormLabel>
      <Slider
        data={{ slider: 10 }}
        min={1}
        max={100}
        path="slider"
        setter={_.noop}
      />
    </FormRow>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  children,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  children,
  title: "Title",
};
