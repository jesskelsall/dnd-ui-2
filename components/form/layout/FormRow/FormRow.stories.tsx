import { ComponentMeta, ComponentStory } from "@storybook/react";
import _ from "lodash/fp";
import { themeDecorator } from "~/.storybook/decorators";
import { FormLabel } from "..";
import { Button } from "../../controls/Button/Button";
import { InputNumber } from "../../data/InputNumber/InputNumber";
import { InputText } from "../../data/InputText/InputText";
import { FormRow } from "./FormRow";

interface IStyledWrapperProps {
  children: React.ReactNode;
}

const StyledWrapper = ({ children }: IStyledWrapperProps) => (
  <FormRow>{children}</FormRow>
);

export default {
  title: "Form/Layout/FormRow",
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
      <Button color="blue">Save</Button>
      <Button color="red">Cancel</Button>
    </>
  ),
};
