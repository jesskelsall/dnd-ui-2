import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "../../../../.storybook/decorators";
import { Button } from "../Button";
import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Framework/Controls/ButtonGroup",
  component: ButtonGroup,
  argTypes: {},
  decorators: [themeDecorator()],
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </>
  ),
};

export const Crud = Template.bind({});
Crud.storyName = "CRUD";
Crud.args = {
  children: (
    <>
      <Button>Edit</Button>
      <Button>Copy</Button>
      <Button colour="red">Delete</Button>
    </>
  ),
};
