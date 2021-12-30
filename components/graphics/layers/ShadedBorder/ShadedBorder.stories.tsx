import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PathCircle } from "../../svg";
import { ShadedBorder } from "./ShadedBorder";

export default {
  title: "Graphics/Layers/ShadedBorder",
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

const defaultArgs = {
  height: 120,
  path: PathCircle({ cx: 60, cy: 60, r: 60 }),
  thickness: 8,
  width: 120,
};

export const AstornoxGold = Template.bind({});
AstornoxGold.args = {
  colorDark: "#5b452b",
  colorLight: "#ffef70",
  colorMid: "#996d33",
  ...defaultArgs,
};

export const AstornoxIron = Template.bind({});
AstornoxIron.args = {
  colorDark: "#3c3c3a",
  colorLight: "#dededc",
  colorMid: "#71716f",
  ...defaultArgs,
};

export const AstorrelGold = Template.bind({});
AstorrelGold.args = {
  colorDark: "#705a3c",
  colorLight: "#ffffeb",
  colorMid: "#ffd351",
  ...defaultArgs,
};

export const AstorrelSilver = Template.bind({});
AstorrelSilver.args = {
  colorDark: "#4f4e4a",
  colorLight: "#f9f8ec",
  colorMid: "#a09f97",
  ...defaultArgs,
};

export const CommonerGrey = Template.bind({});
CommonerGrey.args = {
  colorDark: "#5b5e5d",
  colorLight: "#767979",
  colorMid: "#6c6f6f",
  ...defaultArgs,
};

export const SyntenneCopper = Template.bind({});
SyntenneCopper.args = {
  colorDark: "#5c4841",
  colorLight: "#fff4cb",
  colorMid: "#cf846d",
  ...defaultArgs,
};
