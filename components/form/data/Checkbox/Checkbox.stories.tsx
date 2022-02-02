import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "~/.storybook/decorators";
import { MATERIAL_COLOURS } from "~/consts";
import { Checkbox } from "./Checkbox";

export default {
  title: "Form/Data/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked or not.",
    },
    color: {
      control: {
        type: "select",
        options: MATERIAL_COLOURS,
      },
      description: "CSS color for use as the background",
    },
    setter: {
      control: "function",
      description:
        "The React useState setter function for inverting the checkbox.",
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
  checked: false,
  color: "grey",
  skipTab: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  color: "grey",
  skipTab: false,
};
