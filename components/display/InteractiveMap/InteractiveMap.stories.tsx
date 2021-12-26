import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InteractiveMap } from "./InteractiveMap";

export default {
  title: "Display/InteractiveMap",
  component: InteractiveMap,
  argTypes: {
    imageUrl: {
      control: "text",
      description: "URL to the map image to be displayed.",
    },
    size: {
      control: "number",
      description: "Scale percentage to render the map at.",
    },
    positionHorizontal: {
      control: "number",
      description: "Horizontal positioning percentage to pan the map to.",
    },
    positionVertical: {
      control: "number",
      description: "Vertical positioning percentage to pan the map to.",
    },
  },
} as ComponentMeta<typeof InteractiveMap>;

const Template: ComponentStory<typeof InteractiveMap> = (args) => (
  <InteractiveMap {...args} />
);

export const KingdomOfAstor = Template.bind({});
KingdomOfAstor.storyName = "Kingdom of Astor";
KingdomOfAstor.args = {
  imageUrl: "http://localhost:3000/map-astor.jpg",
  size: 100,
  positionHorizontal: 50,
  positionVertical: 50,
};

export const NilsavnicAlliance = Template.bind({});
NilsavnicAlliance.storyName = "Nil'Savnic Alliance";
NilsavnicAlliance.args = {
  imageUrl: "http://localhost:3000/map-nilsavnic.jpg",
  size: 100,
  positionHorizontal: 50,
  positionVertical: 50,
};
