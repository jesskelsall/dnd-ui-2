import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputNumber } from "./InputNumber";

export default {
  title: "Form/Data/InputNumber",
  component: InputNumber,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the input field is disabled or not.",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when the input field is empty.",
    },
    setter: {
      control: "function",
      description:
        "The React useState setter function for updating the input value.",
    },
    skipTab: {
      control: "boolean",
      description:
        "Whether this input should be skipped over when tabbing between controls.",
    },
    value: {
      control: "text",
      description: "The number inside the input field.",
    },
  },
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  placeholder: "",
  skipTab: false,
  value: 5,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  disabled: false,
  placeholder: "Placeholder",
  skipTab: false,
  value: null,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "",
  skipTab: false,
  value: 100,
};
