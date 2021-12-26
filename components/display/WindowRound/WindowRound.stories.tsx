import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WindowRound } from "./WindowRound";

export default {
  title: "Display/WindowRound",
  component: WindowRound,
  argTypes: {
    imageUrl: {
      control: "text",
      description: "The URL of the character's transparent PNG portrait.",
      table: { category: "Image" },
    },
    scale: {
      control: "number",
      description: "Scale percentage to render the portrait at.",
      table: { category: "Image" },
    },
    positionHorizontal: {
      control: "number",
      description: "Horizontal positioning percentage to pan the portrait to.",
      table: { category: "Image" },
    },
    positionVertical: {
      control: "number",
      description: "Vertical positioning percentage to pan the portrait to.",
      table: { category: "Image" },
    },
    circleRadius: {
      control: "number",
      description: "Radius of the circle cutout in pixels.",
      table: { category: "Circle" },
    },
    overflowRadius: {
      control: "number",
      description:
        "Radius beyond the cutout circle to continue rendering the portrait within.",
      table: { category: "Circle" },
    },
    overflowVertical: {
      control: "number",
      description:
        "Vertical percentage of the full height to allow overflowing to occur within.",
      table: { category: "Circle" },
    },
    showOverflow: {
      control: "boolean",
      description: "Shows the exact shape of the portrait cutout area.",
      table: { category: "Storybook" },
    },
  },
} as ComponentMeta<typeof WindowRound>;

const Template: ComponentStory<typeof WindowRound> = (args) => (
  <WindowRound {...args} />
);

const heroCardUrl = (id: string): string =>
  `https://raw.githubusercontent.com/jesskelsall/astarus-images/main/characters/hero-cards/${id}.png`;

const defaultArgs = {
  circleRadius: 250,
  overflowRadius: 50,
  showOverflow: false,
};

export const Builder = Template.bind({});
Builder.args = {
  imageUrl: "",
  scale: 100,
  positionHorizontal: 50,
  positionVertical: 0,
  circleRadius: defaultArgs.circleRadius,
  overflowRadius: defaultArgs.overflowRadius,
  overflowVertical: 1,
  showOverflow: true,
};

export const Ephaine = Template.bind({});
Ephaine.storyName = "Ephaine Seren";
Ephaine.args = {
  imageUrl: heroCardUrl("3840bf1d6c005683"),
  scale: 156,
  positionHorizontal: 18,
  positionVertical: 2,
  circleRadius: defaultArgs.circleRadius,
  overflowRadius: defaultArgs.overflowRadius,
  overflowVertical: 0.66,
  showOverflow: defaultArgs.showOverflow,
};

export const Saoirse = Template.bind({});
Saoirse.storyName = "Saoirse ó Dochartaigh";
Saoirse.args = {
  imageUrl: heroCardUrl("96456245c79828b5"),
  scale: 124,
  positionHorizontal: 23,
  positionVertical: 2,
  circleRadius: defaultArgs.circleRadius,
  overflowRadius: defaultArgs.overflowRadius,
  overflowVertical: 0.5,
  showOverflow: defaultArgs.showOverflow,
};

export const Updraft = Template.bind({});
Updraft.args = {
  imageUrl: heroCardUrl("a4214a21ac247b88"),
  scale: 104,
  positionHorizontal: -57,
  positionVertical: 36,
  circleRadius: defaultArgs.circleRadius,
  overflowRadius: defaultArgs.overflowRadius,
  overflowVertical: 0.315,
  showOverflow: defaultArgs.showOverflow,
};

export const Vetrall = Template.bind({});
Vetrall.storyName = "Vētrall Astérr";
Vetrall.args = {
  imageUrl: heroCardUrl("47336984c5f7be18"),
  scale: 99,
  positionHorizontal: 109,
  positionVertical: 9,
  circleRadius: defaultArgs.circleRadius,
  overflowRadius: defaultArgs.overflowRadius,
  overflowVertical: 0.54,
  showOverflow: defaultArgs.showOverflow,
};
