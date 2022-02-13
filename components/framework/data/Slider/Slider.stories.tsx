import { ComponentMeta, ComponentStory } from "@storybook/react";
import { controlDecorator } from "../../../../.storybook/decorators";
import { MATERIAL_COLOURS } from "../../../../consts";
import { Slider } from "./Slider";

export default {
  title: "Framework/Data/Slider",
  component: Slider,
  argTypes: {
    colour: {
      control: {
        type: "select",
        options: MATERIAL_COLOURS,
      },
      description: "CSS colour for use on the slider control.",
    },
    data: {
      control: "object",
      description: "The data object that the value of the slider is stored in.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the slider is disabled or not.",
    },
    max: {
      control: "number",
      description: "The maximum value of the slider.",
    },
    min: {
      control: "number",
      description: "The minimum value of the slider.",
    },
    numberInput: {
      control: "boolean",
      description: "Whether to show a number input field alongside the slider.",
    },
    onChange: {
      description:
        "Optional function that is triggered when the value changes.",
    },
    path: {
      control: "text",
      description:
        "Lodash FP path to the input field value within the data object.",
    },
    setter: {
      description:
        "The React useState setter function for updating the data object.",
    },
    skipTab: {
      control: "boolean",
      description:
        "Whether this input should be skipped over when tabbing between controls.",
    },
    step: {
      control: "number",
      description: "How much each increment of the slider advances the value.",
    },
  },
  decorators: [controlDecorator()],
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colour: "grey",
  data: { slider: 30 },
  disabled: false,
  max: 50,
  min: 1,
  numberInput: false,
  path: "slider",
  skipTab: false,
  step: 1,
};

export const StepHalf = Template.bind({});
StepHalf.args = {
  colour: "grey",
  data: { slider: 14.5 },
  disabled: false,
  max: 20,
  min: 1,
  numberInput: false,
  path: "slider",
  skipTab: false,
  step: 0.5,
};

export const StepTens = Template.bind({});
StepTens.args = {
  colour: "grey",
  data: { slider: 20 },
  disabled: false,
  max: 100,
  min: 1,
  numberInput: false,
  path: "slider",
  skipTab: false,
  step: 10,
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  colour: "grey",
  data: { slider: 47 },
  disabled: false,
  max: 100,
  min: 1,
  numberInput: true,
  path: "slider",
  skipTab: false,
  step: 1,
};
