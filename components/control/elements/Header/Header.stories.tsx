import { ComponentMeta, ComponentStory } from "@storybook/react";
import { controlDecorator } from "../../../../.storybook/decorators";
import { Header } from "./Header";

export default {
  title: "Control/Elements/Header",
  component: Header,
  argTypes: {},
  decorators: [controlDecorator()],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Primary = Template.bind({});
Primary.args = {};
