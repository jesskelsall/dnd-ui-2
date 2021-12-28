import { ComponentMeta, ComponentStory } from "@storybook/react";
import { nanoid } from "nanoid";
import { svgDecorator } from "../../../../.storybook/decorators/svg";
import { circlePath } from "../../paths";
import { BoxShadowFilter, IBoxShadowFilterProps } from "./BoxShadowFilter";

const SVGFilter = (props: IBoxShadowFilterProps) => {
  const id = nanoid();

  return (
    <>
      <BoxShadowFilter boxShadows={props.boxShadows} id={id} />
      <path
        d={circlePath({ cx: 100, cy: 100, r: 100 })}
        fill="grey"
        filter={`url(#${id})`}
      />
    </>
  );
};

export default {
  title: "SVG/effects/BoxShadowFilter",
  component: SVGFilter,
  argTypes: {
    boxShadows: {
      control: "array",
      description: "Box shadow objects for each filter to apply.",
    },
    id: {
      control: "text",
      description: "The unique ID used to reference the filter.",
    },
  },
  decorators: [svgDecorator()],
} as ComponentMeta<typeof SVGFilter>;

const Template: ComponentStory<typeof SVGFilter> = (args) => (
  <SVGFilter {...args} />
);

export const Single = Template.bind({});
Single.args = {
  boxShadows: [
    {
      blur: 5,
      color: "black",
      hOffset: 0,
      vOffset: 15,
    },
  ],
  id: "shadow",
};

export const Multiple = Template.bind({});
Multiple.args = {
  boxShadows: [
    {
      blur: 0,
      color: "purple",
      hOffset: 10,
      vOffset: 20,
    },
    {
      blur: 20,
      color: "yellow",
      hOffset: 20,
      vOffset: -20,
    },
  ],
  id: "shadow",
};
