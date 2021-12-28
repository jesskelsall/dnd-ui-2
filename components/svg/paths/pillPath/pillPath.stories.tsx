import { ComponentMeta, ComponentStory } from "@storybook/react";
import { svgDecorator } from "../../../../.storybook/decorators/svg";
import { IPillPathArgs, pillPath } from "./pillPath";

const SVGPath = (props: IPillPathArgs) => <path d={pillPath(props)} />;

export default {
  title: "SVG/paths/pillPath",
  component: SVGPath,
  argTypes: {
    width: {
      control: "number",
      description: "The width of the pill.",
    },
    height: {
      control: "number",
      description: "The height of the pill.",
    },
    x: {
      control: "number",
      description: "Horizontal position, from top left corner.",
    },
    y: {
      control: "number",
      description: "Vertical position, from top left corner.",
    },
  },
  decorators: [svgDecorator()],
} as ComponentMeta<typeof SVGPath>;

const Template: ComponentStory<typeof SVGPath> = (args) => (
  <SVGPath {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 200,
  height: 60,
  x: 0,
  y: 0,
};
