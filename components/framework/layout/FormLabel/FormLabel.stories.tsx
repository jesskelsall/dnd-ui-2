import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "../../../../.storybook/decorators";
import { FormLabel } from "./FormLabel";

interface IStyledWrapperProps {
  children: React.ReactNode;
}

const StyledWrapper = ({ children }: IStyledWrapperProps) => (
  <FormLabel>{children}</FormLabel>
);

export default {
  title: "Framework/Layout/FormLabel",
  component: StyledWrapper,
  argTypes: {},
  decorators: [themeDecorator()],
} as ComponentMeta<typeof StyledWrapper>;

const Template: ComponentStory<typeof StyledWrapper> = (args) => (
  <StyledWrapper {...args} />
);

export const SingleLine = Template.bind({});
SingleLine.args = {
  children: "Single Line",
};

export const MultipleLines = Template.bind({});
MultipleLines.args = {
  children: "Long label on multiple lines",
};
