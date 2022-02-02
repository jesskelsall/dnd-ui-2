import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "~/.storybook/decorators";
import { Dropdown } from "./Dropdown";

export default {
  title: "Form/Data/Dropdown",
  component: Dropdown,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the dropdown is disabled or not.",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when the dropdown has no selection.",
    },
    options: {
      control: "array",
      description:
        "Array of label/value objects that form the dropdown's options.",
    },
    setter: {
      control: "function",
      description:
        "The React useState setter function for updating the dropdown.",
    },
    skipTab: {
      control: "boolean",
      description:
        "Whether this dropdown should be skipped over when tabbing between controls.",
    },
    value: {
      control: "text",
      description: "The selected option's value.",
    },
  },
  decorators: [themeDecorator()],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const textOptions = [
  {
    label: "First",
    value: "one",
  },
  {
    label: "Second",
    value: "two",
  },
  {
    label: "Third",
    value: "three",
  },
];

export const Text = Template.bind({});
Text.args = {
  disabled: false,
  placeholder: "",
  options: textOptions,
  skipTab: false,
  value: textOptions[0].value,
};

export const Numbers = Template.bind({});
Numbers.args = {
  disabled: false,
  placeholder: "",
  options: [
    {
      label: "One",
      value: 1,
    },
    {
      label: "Two",
      value: 2,
    },
    {
      label: "Three",
      value: 3,
    },
  ],
  skipTab: false,
  value: 2,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "",
  options: textOptions,
  skipTab: false,
  value: textOptions[0].value,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  disabled: false,
  placeholder: "Placeholder",
  options: textOptions,
  skipTab: false,
  value: null,
};
