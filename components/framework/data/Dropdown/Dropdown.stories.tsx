import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "~/.storybook/decorators";
import { Dropdown } from "./Dropdown";

export default {
  title: "Framework/Data/Dropdown",
  component: Dropdown,
  argTypes: {
    data: {
      control: "object",
      description:
        "The data object that the value of the dropdown is stored in.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the dropdown is disabled or not.",
    },
    onChange: {
      description:
        "Optional function that is triggered when the value changes.",
    },
    path: {
      control: "text",
      description:
        "Lodash FP path to the input field value within the data object.",
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
      description:
        "The React useState setter function for updating the data object.",
    },
    skipTab: {
      control: "boolean",
      description:
        "Whether this dropdown should be skipped over when tabbing between controls.",
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
  data: { dropdown: textOptions[0].value },
  disabled: false,
  path: "dropdown",
  placeholder: "",
  options: textOptions,
  skipTab: false,
};

export const Numbers = Template.bind({});
Numbers.args = {
  data: { dropdown: 2 },
  disabled: false,
  path: "dropdown",
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
};

export const Disabled = Template.bind({});
Disabled.args = {
  data: { dropdown: textOptions[0].value },
  disabled: true,
  path: "dropdown",
  placeholder: "",
  options: textOptions,
  skipTab: false,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  data: { dropdown: null },
  disabled: false,
  path: "dropdown",
  placeholder: "Placeholder",
  options: textOptions,
  skipTab: false,
};
