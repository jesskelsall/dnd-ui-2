import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "~/.storybook/decorators";
import ButtonConfig from "../Button/Button.stories";
import { Dot } from "./Dot";

export default {
  title: "Form/Controls/Dot",
  component: Dot,
  argTypes: ButtonConfig.argTypes,
  decorators: [themeDecorator()],
} as ComponentMeta<typeof Dot>;

const Template: ComponentStory<typeof Dot> = (args) => <Dot {...args} />;

export const Blank = Template.bind({});
Blank.args = {
  clickable: true,
  color: "grey",
  disabled: false,
  outline: false,
};

export const Letter = Template.bind({});
Letter.args = {
  children: "X",
  clickable: true,
  color: "red",
  disabled: false,
  outline: false,
};
