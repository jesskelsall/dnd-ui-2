import { ComponentMeta, ComponentStory } from "@storybook/react";
import { circlePath } from "../../paths";
import { ShadedBorder } from "./ShadedBorder";

export default {
  title: "SVG/Layers/ShadedBorder",
  component: ShadedBorder,
  argTypes: {
    path: {
      control: "text",
      description: "The path d attribute being shaded.",
      table: { category: "Path" },
    },
    thickness: {
      control: "number",
      description:
        "The thickness of the path's stroke. Shading is scaled to thickness.",
      table: { category: "Path" },
    },
    width: {
      control: "number",
      description:
        "The width of the path not including the stroke. Used to determine the SVG canvas size.",
      table: { category: "SVG" },
    },
    height: {
      control: "number",
      description:
        "The height of the path not including the stroke. Used to determine the SVG canvas size.",
      table: { category: "SVG" },
    },
    colorMid: {
      control: "color",
      description: "The base colour of the path stroke.",
      table: { category: "Color" },
    },
    colorLight: {
      control: "color",
      description:
        "The colour shaded on the top of the stroke. Should be lighter than colorMid.",
      table: { category: "Color" },
    },
    colorDark: {
      control: "color",
      description:
        "The colour shaded on the bottom of the stroke. Should be darker than colorMid.",
      table: { category: "Color" },
    },
  },
} as ComponentMeta<typeof ShadedBorder>;

const Template: ComponentStory<typeof ShadedBorder> = (args) => (
  <ShadedBorder {...args} />
);

export const Gold = Template.bind({});
Gold.args = {
  colorDark: "rgb(91, 69, 43)",
  colorLight: "rgb(255, 239, 112)",
  colorMid: "rgb(153, 109, 51)",
  height: 120,
  path: circlePath({ cx: 60, cy: 60, r: 60 }),
  thickness: 8,
  width: 120,
};
