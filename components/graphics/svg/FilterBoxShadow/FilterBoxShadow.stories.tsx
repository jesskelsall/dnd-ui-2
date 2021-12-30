import { ComponentMeta, ComponentStory } from "@storybook/react";
import { nanoid } from "nanoid";
import { svgDecorator } from "../../../../.storybook/decorators";
import { PathCircle } from "../PathCircle/PathCircle";
import { FilterBoxShadow, IFilterBoxShadowProps } from "./FilterBoxShadow";

const SVGFilter = (props: IFilterBoxShadowProps) => {
  const id = nanoid();

  return (
    <>
      <FilterBoxShadow {...props} id={id} />
      <path
        d={PathCircle({ cx: 100, cy: 100, r: 100 })}
        fill="grey"
        filter={`url(#${id})`}
      />
    </>
  );
};

export default {
  title: "Graphics/SVG/FilterBoxShadow",
  component: SVGFilter,
  argTypes: {
    id: {
      control: "text",
      description: "The unique ID used to reference the filter.",
    },
    boxShadows: {
      control: "array",
      description: "Box shadow objects for each filter to apply.",
    },
    transparent: {
      control: "boolean",
      description: "If true, don't render the original element.",
    },
  },
  decorators: [svgDecorator(200)],
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
  transparent: false,
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
  transparent: false,
};

export const Transparent = Template.bind({});
Transparent.args = {
  boxShadows: [
    {
      blur: 5,
      color: "green",
      hOffset: 0,
      vOffset: -20,
    },
  ],
  transparent: true,
};
