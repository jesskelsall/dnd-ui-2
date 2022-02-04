import { ComponentMeta, ComponentStory } from "@storybook/react";
import { characterImage } from "../../../../functions";
import { PortraitCircle } from "./PortraitCircle";

export default {
  title: "Graphics/Elements/PortraitCircle",
  component: PortraitCircle,
  argTypes: {
    backgroundImageUrl: {
      control: "text",
      description: "The URL of the repeating background texture image.",
      table: { category: "Background" },
    },
    backgroundScale: {
      control: "number",
      description: "Scale percentage to render the background at.",
      table: { category: "Background" },
    },
    backgroundFilterStyle: {
      control: "text",
      description: "CSS filter to be applied to the background image.",
      table: { category: "Background" },
    },
    backgroundAnimation: {
      control: "object",
      description:
        "Optional object describing the background's animation and its properties.",
      table: { category: "Background" },
    },
    borderThickness: {
      control: "number",
      description:
        "The thickness of the path's stroke. Shading is scaled to thickness.",
      table: { category: "Border" },
    },
    borderDiameter: {
      control: "number",
      description:
        "The diameter of the border circle, centered on the middle of its thickness.",
      table: { category: "Border" },
    },
    borderColorMid: {
      control: "color",
      description: "The base colour of the path stroke.",
      table: { category: "Border" },
    },
    borderColorLight: {
      control: "color",
      description:
        "The colour shaded on the top of the stroke. Should be lighter than colorMid.",
      table: { category: "Border" },
    },
    borderColorDark: {
      control: "color",
      description:
        "The colour shaded on the bottom of the stroke. Should be darker than colorMid.",
      table: { category: "Border" },
    },
    imageUrl: {
      control: "text",
      description: "The URL of the character's transparent PNG portrait.",
      table: { category: "Image" },
    },
    imageScale: {
      control: "number",
      description: "Scale percentage to render the portrait at.",
      table: { category: "Image" },
    },
    imagePositionHorizontal: {
      control: "number",
      description: "Horizontal positioning percentage to pan the portrait to.",
      table: { category: "Image" },
    },
    imagePositionVertical: {
      control: "number",
      description: "Vertical positioning percentage to pan the portrait to.",
      table: { category: "Image" },
    },
    imageOverflowRadius: {
      control: "number",
      description:
        "Radius beyond the cutout circle to continue rendering the portrait within.",
      table: { category: "Image" },
    },
    imageOverflowVertical: {
      control: "number",
      description:
        "Vertical percentage of the full height to allow overflowing to occur within.",
      table: { category: "Image" },
    },
  },
} as ComponentMeta<typeof PortraitCircle>;

const Template: ComponentStory<typeof PortraitCircle> = (args) => (
  <PortraitCircle {...args} />
);

const defaultBackgroundArgs = {
  backgroundScale: 100,
  backgroundFilterStyle: "",
  backgroundAnimation: {
    type: "slide" as const,
    speed: 200,
    horizontal: 800,
    vertical: 0,
  },
};

export const Complex = Template.bind({});
Complex.args = {
  backgroundImageUrl:
    "https://3djungle.net/upload/resize_cache/iblock/a80/400_400_1/a8045f97d6581f19dfe823dc2dccbf8f.jpg",
  backgroundScale: 100,
  backgroundFilterStyle: "",
  backgroundAnimation: {
    type: "slide",
    speed: 200,
    horizontal: 800,
    vertical: 0,
  },
  borderThickness: 16,
  borderDiameter: 400,
  borderColorMid: "#a09f97",
  borderColorLight: "#f9f8ec",
  borderColorDark: "#4f4e4a",
  imageUrl: characterImage("portraits", "3840bf1d6c005683"),
  imageScale: 220,
  imagePositionHorizontal: 55,
  imagePositionVertical: 2.3,
  imageOverflowRadius: 20,
  imageOverflowVertical: 0.5,
};

export const Medium = Template.bind({});
Medium.args = {
  backgroundImageUrl:
    "https://3djungle.net/upload/resize_cache/iblock/843/400_400_1/84332dbd07e2f75aa39fd59222c06987.jpg",
  backgroundScale: 100,
  backgroundFilterStyle: "brightness(130%) sepia(40%)",
  backgroundAnimation: {
    type: "slide",
    speed: 70,
    horizontal: 0,
    vertical: 400,
  },
  borderThickness: 8,
  borderDiameter: 120,
  borderColorDark: "#5b452b",
  borderColorLight: "#ffef70",
  borderColorMid: "#996d33",
  imageUrl: characterImage("portraits", "3e22248438b88633"),
  imageScale: 210,
  imagePositionHorizontal: 52,
  imagePositionVertical: 0.5,
  imageOverflowRadius: 20,
  imageOverflowVertical: 0.5,
};

export const Large = Template.bind({});
Large.args = {
  backgroundImageUrl:
    "https://3djungle.net/upload/resize_cache/iblock/bdb/400_400_1/bdb6fdc522f43dd7700e0eafefd8ea31.jpg",
  backgroundScale: 150,
  backgroundFilterStyle: "brightness(80%)",
  backgroundAnimation: {
    type: "slide",
    speed: 30,
    horizontal: 1200,
    vertical: -400,
  },
  borderThickness: 8,
  borderDiameter: 200,
  borderColorDark: "#3c3c3a",
  borderColorLight: "#dededc",
  borderColorMid: "#71716f",
  imageUrl: characterImage("hero-cards", "b2aa89a6831d0359"),
  imageScale: 270,
  imagePositionHorizontal: 55,
  imagePositionVertical: 21,
  imageOverflowRadius: 20,
  imageOverflowVertical: 0.5,
};

export const Hero = Template.bind({});
Hero.args = {
  backgroundImageUrl:
    "https://3djungle.net/upload/resize_cache/iblock/e9f/400_400_1/e9f0643a1b36de06b0fe0061848d21c7.jpg",
  backgroundScale: 110,
  backgroundFilterStyle: "",
  backgroundAnimation: {
    type: "slide",
    speed: 60,
    horizontal: 0,
    vertical: -400,
  },
  borderThickness: 12,
  borderDiameter: 400,
  borderColorDark: "#5b452b",
  borderColorLight: "#ffef70",
  borderColorMid: "#996d33",
  imageUrl: characterImage("hero-cards", "50e8e14dbe105dba"),
  imageScale: 200,
  imagePositionHorizontal: 50,
  imagePositionVertical: 0,
  imageOverflowRadius: 40,
  imageOverflowVertical: 0.5,
};
