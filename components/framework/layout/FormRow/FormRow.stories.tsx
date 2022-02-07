import { ComponentMeta, ComponentStory } from "@storybook/react";
import _ from "lodash/fp";
import { themeDecorator } from "../../../../.storybook/decorators";
import { Button } from "../../controls";
import { InputNumber, InputText } from "../../data";
import { FormLabel } from "../FormLabel";
import { FormRow } from "./FormRow";

interface IStyledWrapperProps {
  children: React.ReactNode;
}

const StyledWrapper = ({ children }: IStyledWrapperProps) => (
  <FormRow>{children}</FormRow>
);

export default {
  title: "Framework/Layout/FormRow",
  component: StyledWrapper,
  argTypes: {},
  decorators: [themeDecorator()],
} as ComponentMeta<typeof StyledWrapper>;

const Template: ComponentStory<typeof StyledWrapper> = (args) => (
  <StyledWrapper {...args} />
);

export const SingleField = Template.bind({});
SingleField.args = {
  children: (
    <>
      <FormLabel>Text Field</FormLabel>
      <InputText data={{ text: "" }} path="text" setter={_.noop} />
    </>
  ),
};

export const MultipleFields = Template.bind({});
MultipleFields.args = {
  children: (
    <>
      <FormLabel>Text Field</FormLabel>
      <InputText data={{ text: "" }} path="text" setter={_.noop} />
      <FormLabel>Number Field</FormLabel>
      <InputNumber data={{ number: 0 }} path="number" setter={_.noop} />
    </>
  ),
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  children: (
    <>
      <FormLabel>Text Field</FormLabel>
      <InputText data={{ text: "" }} path="text" setter={_.noop} />
      <Button colour="blue">Save</Button>
      <Button colour="red">Cancel</Button>
    </>
  ),
};
