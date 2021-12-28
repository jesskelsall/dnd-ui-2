import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BackgroundTexture } from "./BackgroundTexture";

export default {
  title: "Display/BackgroundTexture",
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
  },
} as ComponentMeta<typeof BackgroundTexture>;

const Template: ComponentStory<typeof BackgroundTexture> = (args) => (
  <BackgroundTexture {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl:
    "https://3djungle.net/upload/resize_cache/iblock/038/400_400_1/03893cb553da838b4a869e71de6fc9d5.jpg",
  scale: 20,
};
