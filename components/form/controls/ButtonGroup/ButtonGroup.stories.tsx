import { ComponentStory } from "@storybook/react";
import { CONTROL_COLORS } from "../../../../consts";
import { Button } from "../Button/Button";
import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Form/Controls/ButtonGroup",
  component: ButtonGroup,
  argTypes: {},
};

const Template: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup>
    <Button color={CONTROL_COLORS.BLUE}>First</Button>
    <Button color={CONTROL_COLORS.BLUE}>Second</Button>
    <Button color={CONTROL_COLORS.BLUE}>Third</Button>
  </ButtonGroup>
);

export const Primary = Template.bind({});
