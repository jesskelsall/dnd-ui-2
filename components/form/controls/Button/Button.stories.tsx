import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CONTROL_COLORS } from "../../../../consts";
import { Button } from "./Button";

export default {
  title: "Form/Controls/Button",
  component: Button,
  argTypes: {
    block: {
      control: "boolean",
      description: "Whether the button has a fixed minimum width.",
    },
    color: {
      control: {
        type: "select",
        options: CONTROL_COLORS,
      },
      description: "CSS color for use as the background",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button should appear disabled.",
    },
    fake: {
      control: "boolean",
      description: "True if the button does nothing when clicked.",
    },
    outline: {
      control: "boolean",
      description: "Whether to style the button with only an outline.",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  block: false,
  fake: false,
  color: CONTROL_COLORS.BLUE,
  disabled: false,
  outline: false,
};

export const Block = Template.bind({});
Block.args = {
  block: true,
  fake: false,
  color: CONTROL_COLORS.BLUE,
  disabled: false,
  outline: false,
};

export const Fake = Template.bind({});
Fake.args = {
  block: false,
  fake: true,
  color: CONTROL_COLORS.BLUE,
  disabled: false,
  outline: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  block: false,
  fake: false,
  color: CONTROL_COLORS.BLUE,
  disabled: true,
  outline: false,
};

export const Outline = Template.bind({});
Outline.args = {
  block: false,
  fake: false,
  color: CONTROL_COLORS.BLUE,
  disabled: false,
  outline: true,
};
