import { ComponentMeta, ComponentStory } from "@storybook/react";
import { controlDecorator } from "../../../../.storybook/decorators";
import ButtonConfig from "../Button/Button.stories";
import { Dot } from "./Dot";

export default {
  title: "Framework/Controls/Dot",
  component: Dot,
  argTypes: ButtonConfig.argTypes,
  decorators: [controlDecorator()],
} as ComponentMeta<typeof Dot>;

const Template: ComponentStory<typeof Dot> = (args) => <Dot {...args} />;

export const Blank = Template.bind({});
Blank.args = {
  colour: "grey",
  disabled: false,
  fake: false,
  outline: false,
};

export const Letter = Template.bind({});
Letter.args = {
  children: "X",
  colour: "red",
  disabled: false,
  fake: false,
  outline: false,
};
