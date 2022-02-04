import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "~/.storybook/decorators";
import { Slider } from "./Slider";

export default {
  title: "Form/Data/Slider",
  component: Slider,
  argTypes: {},
  decorators: [themeDecorator()],
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
