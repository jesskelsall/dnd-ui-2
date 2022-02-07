import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "../../../../.storybook/decorators";
import { MATERIAL_COLOURS } from "../../../../consts";
import { Checkbox } from "./Checkbox";

export default {
  title: "Framework/Data/Checkbox",
  component: Checkbox,
  argTypes: {
    colour: {
      control: {
        type: "select",
        options: MATERIAL_COLOURS,
      },
      description: "CSS colour for use as the background",
    },
    data: {
      control: "object",
      description:
        "The data object that the value of the checkbox is stored in.",
    },
    disabled: {
      control: "boolean",
      description: "Whether this input is disabled or not.",
    },
    onChange: {
      description:
        "Optional function that is triggered when the value changes.",
    },
    path: {
      control: "text",
      description:
        "Lodash FP path to the checkbox value within the data object.",
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
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const NotChecked = Template.bind({});
NotChecked.args = {
  colour: "grey",
  data: { checkbox: false },
  disabled: false,
  path: "checkbox",
  skipTab: false,
};

export const Checked = Template.bind({});
Checked.args = {
  colour: "grey",
  data: { checkbox: true },
  disabled: false,
  path: "checkbox",
  skipTab: false,
};
