import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextShaded } from "./TextShaded";

export default {
  title: "Graphics/Layers/TextShaded",
  component: TextShaded,
  argTypes: {
    text: {
      control: "text",
      description: "The text to display.",
    },
    fontSize: {
      control: "number",
      description: "The size to render the text at in pixels.",
    },
    fontWeight: {
      control: {
        type: "radio",
        options: ["regular", "bold"],
      },
      description: "The thickness to render the text at.",
    },
  },
} as ComponentMeta<typeof TextShaded>;

const Template: ComponentStory<typeof TextShaded> = (args) => (
  <TextShaded {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  colorMid: "grey",
  colorLight: "lightgrey",
  colorDark: "black",
  text: "Vētrall",
  fontSize: 100,
  fontWeight: "bold",
};
