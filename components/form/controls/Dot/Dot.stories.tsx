import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CONTROL_COLORS } from "../../../../consts";
import ButtonConfig from "../Button/Button.stories";
import { Dot } from "./Dot";

export default {
  title: "Form/Controls/Dot",
  component: Dot,
  argTypes: ButtonConfig.argTypes,
} as ComponentMeta<typeof Dot>;

const Template =
  (letter: string): ComponentStory<typeof Dot> =>
  (args) =>
    <Dot {...args}>{letter}</Dot>;

export const Blank = Template("").bind({});
Blank.args = {
  clickable: true,
  color: CONTROL_COLORS.BLUE,
  disabled: false,
  outline: false,
};

export const Letter = Template("X").bind({});
Letter.args = {
  clickable: true,
  color: CONTROL_COLORS.RED,
  disabled: false,
  outline: false,
};
