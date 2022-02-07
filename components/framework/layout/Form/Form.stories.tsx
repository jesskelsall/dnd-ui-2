import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../..";
import { themeDecorator } from "../../../../.storybook/decorators";
import { Form } from "./Form";

export default {
  title: "Framework/Layout/Form",
  component: Form,
  argTypes: {
    buttons: {
      control: "object",
      description:
        "Button JSX to be displayed on the right hand side of the form header.",
    },
    title: {
      control: "text",
      description: "The title to display in the form header.",
    },
  },
  decorators: [themeDecorator()],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Form",
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  buttons: (
    <>
      <Button colour="blue">Save</Button>
      <Button colour="red">Cancel</Button>
    </>
  ),
  title: "With Buttons",
};
