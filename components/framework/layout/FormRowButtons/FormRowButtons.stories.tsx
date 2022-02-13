import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../controls";
import { controlDecorator } from "../../../../.storybook/decorators";
import { FormRowButtons } from "./FormRowButtons";

interface IStyledWrapperProps {
  children: React.ReactNode;
}

const StyledWrapper = ({ children }: IStyledWrapperProps) => (
  <FormRowButtons>{children}</FormRowButtons>
);

export default {
  title: "Framework/Layout/FormRowButtons",
  component: StyledWrapper,
  argTypes: {},
  decorators: [controlDecorator()],
} as ComponentMeta<typeof StyledWrapper>;

const Template: ComponentStory<typeof StyledWrapper> = (args) => (
  <StyledWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
      <Button>Fourth</Button>
      <Button>Fifth</Button>
      <Button>Sixth</Button>
      <Button>Seventh</Button>
      <Button>Eighth</Button>
      <Button>Nineth</Button>
      <Button>Tenth</Button>
    </>
  ),
};
