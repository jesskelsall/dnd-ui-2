import { ComponentMeta, ComponentStory } from "@storybook/react";
import { controlDecorator } from "../../../../.storybook/decorators";
import { Breadcrumbs } from "./Breadcrumbs";

export default {
  title: "Control/Elements/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    route: {
      control: "text",
      description: "The Next.js route path to the current page.",
    },
  },
  decorators: [controlDecorator()],
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const Home = Template.bind({});
Home.args = {
  route: "/control",
};

export const FirstLevel = Template.bind({});
FirstLevel.args = {
  route: "/control/mapScreen",
};

export const SecondLevel = Template.bind({});
SecondLevel.args = {
  route: "/control/mapScreen/maps",
};

export const EditPage = Template.bind({});
EditPage.args = {
  route: "/control/mapScreen/maps/[map]",
};
