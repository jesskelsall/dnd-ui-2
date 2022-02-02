import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "~/.storybook/decorators";
import { MATERIAL_COLOURS } from "~/consts";
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
        options: MATERIAL_COLOURS,
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
  decorators: [themeDecorator()],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  block: false,
  fake: false,
  color: "grey",
  disabled: false,
  outline: false,
};

export const Block = Template.bind({});
Block.args = {
  block: true,
  fake: false,
  color: "blue",
  disabled: false,
  outline: false,
};

export const Fake = Template.bind({});
Fake.args = {
  block: false,
  fake: true,
  color: "green",
  disabled: false,
  outline: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  block: false,
  fake: false,
  color: "orange",
  disabled: true,
  outline: false,
};

export const Outline = Template.bind({});
Outline.args = {
  block: false,
  fake: false,
  color: "red",
  disabled: false,
  outline: true,
};
