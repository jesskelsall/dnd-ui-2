import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "~/.storybook/decorators";
import { InputNumber } from "./InputNumber";

export default {
  title: "Framework/Data/InputNumber",
  component: InputNumber,
  argTypes: {
    data: {
      control: "object",
      description:
        "The data object that the value of the input field is stored in.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input field is disabled or not.",
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
      description: "Placeholder text shown when the input field is empty.",
    },
    setter: {
      description:
        "The React useState setter function for updating the data object.",
    },
    skipTab: {
      control: "boolean",
      description:
        "Whether this input should be skipped over when tabbing between controls.",
    },
  },
  decorators: [themeDecorator()],
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: { input: 5 },
  disabled: false,
  path: "input",
  placeholder: "",
  skipTab: false,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  data: { input: null },
  disabled: false,
  path: "input",
  placeholder: "Placeholder",
  skipTab: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  data: { input: 100 },
  disabled: true,
  path: "input",
  placeholder: "",
  skipTab: false,
};
