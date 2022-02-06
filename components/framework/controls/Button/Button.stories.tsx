import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "~/.storybook/decorators";
import { MATERIAL_COLOURS } from "~/consts";
import { Button } from "./Button";

export default {
  title: "Framework/Controls/Button",
  component: Button,
  argTypes: {
    block: {
      control: "boolean",
      description:
        "Whether the button is displayed as a block, expanding to fill the available width.",
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
    wide: {
      control: "boolean",
      description: "Whether to provide a minimum width.",
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
  wide: false,
};

export const Block = Template.bind({});
Block.args = {
  block: true,
  fake: false,
  color: "blue",
  disabled: false,
  outline: false,
  wide: false,
};

export const Fake = Template.bind({});
Fake.args = {
  block: false,
  fake: true,
  color: "green",
  disabled: false,
  outline: false,
  wide: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  block: false,
  fake: false,
  color: "yellow",
  disabled: true,
  outline: false,
  wide: false,
};

export const Outline = Template.bind({});
Outline.args = {
  block: false,
  fake: false,
  color: "orange",
  disabled: false,
  outline: true,
  wide: false,
};

export const Wide = Template.bind({});
Wide.args = {
  block: false,
  fake: false,
  color: "red",
  disabled: false,
  outline: false,
  wide: true,
};
