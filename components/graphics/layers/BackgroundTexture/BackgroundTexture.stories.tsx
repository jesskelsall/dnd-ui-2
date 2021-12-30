import { ComponentMeta, ComponentStory } from "@storybook/react";
import { backgroundDecorator } from "../../../../.storybook/decorators";
import { BackgroundTexture } from "./BackgroundTexture";

export default {
  title: "Graphics/Layers/BackgroundTexture",
  component: BackgroundTexture,
  argTypes: {
    imageUrl: {
      control: "text",
      description: "The URL of the repeating background texture image.",
    },
    scale: {
      control: "number",
      description: "Scale percentage to render the background at.",
    },
    filterStyle: {
      control: "text",
      description: "CSS filter to be applied to the background image.",
    },
    animation: {
      control: "object",
      description:
        "Optional object describing the background's animation and its properties.",
    },
  },
  decorators: [backgroundDecorator()],
} as ComponentMeta<typeof BackgroundTexture>;

const Template: ComponentStory<typeof BackgroundTexture> = (args) => (
  <BackgroundTexture {...args} />
);

export const Static = Template.bind({});
Static.args = {
  animation: undefined,
  filterStyle: "",
  imageUrl:
    "https://3djungle.net/upload/resize_cache/iblock/038/400_400_1/03893cb553da838b4a869e71de6fc9d5.jpg",
  scale: 40,
};

export const Slide = Template.bind({});
Slide.args = {
  animation: {
    type: "slide",
    speed: 50,
    horizontal: 200,
    vertical: 100,
  },
  filterStyle: "",
  imageUrl:
    "https://3djungle.net/upload/resize_cache/iblock/038/400_400_1/03893cb553da838b4a869e71de6fc9d5.jpg",
  scale: 30,
};
