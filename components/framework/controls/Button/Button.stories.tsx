import { ComponentMeta, ComponentStory } from "@storybook/react";
import { controlDecorator } from "../../../../.storybook/decorators";
import { MATERIAL_COLOURS } from "../../../../consts";
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
    colour: {
      control: {
        type: "select",
        options: MATERIAL_COLOURS,
      },
      description: "CSS colour for use as the background",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button should appear disabled.",
    },
    fake: {
      control: "boolean",
      description: "True if the button does nothing when clicked.",
    },
    large: {
      control: "boolean",
      description: "Whether to display a larger button with larger text.",
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
  decorators: [controlDecorator()],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  block: false,
  colour: "grey",
  disabled: false,
  fake: false,
  large: false,
  outline: false,
  wide: false,
};

export const Block = Template.bind({});
Block.args = {
  block: true,
  colour: "blue",
  disabled: false,
  fake: false,
  large: false,
  outline: false,
  wide: false,
};

export const Fake = Template.bind({});
Fake.args = {
  block: false,
  colour: "green",
  disabled: false,
  fake: true,
  large: false,
  outline: false,
  wide: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  block: false,
  colour: "yellow",
  disabled: true,
  fake: false,
  large: false,
  outline: false,
  wide: false,
};

export const Outline = Template.bind({});
Outline.args = {
  block: false,
  colour: "orange",
  disabled: false,
  fake: false,
  large: false,
  outline: true,
  wide: false,
};

export const Wide = Template.bind({});
Wide.args = {
  block: false,
  colour: "red",
  disabled: false,
  fake: false,
  large: false,
  outline: false,
  wide: true,
};

export const Large = Template.bind({});
Large.args = {
  block: false,
  colour: "blue",
  disabled: false,
  fake: false,
  large: true,
  outline: false,
  wide: false,
};
