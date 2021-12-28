import { ComponentMeta, ComponentStory } from "@storybook/react";
import { svgDecorator } from "../../../../.storybook/decorators/svg";
import { circlePath, ICirclePathArgs } from "./circlePath";

const SVGPath = (props: ICirclePathArgs) => <path d={circlePath(props)} />;

export default {
  title: "SVG/paths/circlePath",
  component: SVGPath,
  argTypes: {
    cx: {
      control: "number",
      description: "Horizontal position, from circle center.",
    },
    cy: {
      control: "number",
      description: "Vertical position, from circle center.",
    },
    r: {
      control: "number",
      description: "Circle radius.",
    },
  },
  decorators: [svgDecorator()],
} as ComponentMeta<typeof SVGPath>;

const Template: ComponentStory<typeof SVGPath> = (args) => (
  <SVGPath {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cx: 50,
  cy: 50,
  r: 50,
};
