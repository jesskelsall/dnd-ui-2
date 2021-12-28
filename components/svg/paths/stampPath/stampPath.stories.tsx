import { ComponentMeta, ComponentStory } from "@storybook/react";
import { svgDecorator } from "../../../../.storybook/decorators/svg";
import { IStampPathArgs, stampPath } from "./stampPath";

const SVGPath = (props: IStampPathArgs) => <path d={stampPath(props)} />;

export default {
  title: "SVG/paths/stampPath",
  component: SVGPath,
  argTypes: {
    width: {
      control: "number",
      description: "The width of the stamp.",
    },
    height: {
      control: "number",
      description: "The height of the stamp.",
    },
    r: {
      control: "number",
      description: "Radius of the quarter circles cut out of each corner.",
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
  height: 100,
  r: 20,
  x: 0,
  y: 0,
};
