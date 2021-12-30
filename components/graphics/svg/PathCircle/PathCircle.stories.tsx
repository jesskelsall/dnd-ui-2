import { ComponentMeta, ComponentStory } from "@storybook/react";
import { svgDecorator } from "../../../../.storybook/decorators/svg";
import { IPathCircleArgs, PathCircle } from "./PathCircle";

const SVGPath = (props: IPathCircleArgs) => <path d={PathCircle(props)} />;

export default {
  title: "Graphics/SVG/PathCircle",
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
