import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "~/.storybook/decorators";
import { Button } from "../Button/Button";
import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Form/Controls/ButtonGroup",
  component: ButtonGroup,
  argTypes: {},
  decorators: [themeDecorator()],
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup>
    <Button>First</Button>
    <Button>Second</Button>
    <Button>Third</Button>
  </ButtonGroup>
);

export const Primary = Template.bind({});
