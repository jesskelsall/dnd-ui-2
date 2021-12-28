import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PortholeMedium } from "./PortholeMedium";

export default {
  title: "Display/PortholeMedium",
  component: PortholeMedium,
  argTypes: {},
} as ComponentMeta<typeof PortholeMedium>;

const Template: ComponentStory<typeof PortholeMedium> = (args) => (
  <PortholeMedium {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl:
    "https://raw.githubusercontent.com/jesskelsall/astarus-images/main/characters/portraits/3840bf1d6c005683.png",
  borderColorDark: "black",
  borderColorLight: "lightgrey",
  borderColorMid: "grey",
  imageScale: 220,
  imagePositionHorizontal: 55,
  imagePositionVertical: 1,
  imageOverflowVertical: 0.5,
};
