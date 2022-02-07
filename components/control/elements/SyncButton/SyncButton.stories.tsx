import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeDecorator } from "../../../../.storybook/decorators";
import { SyncButton } from "./SyncButton";

export default {
  title: "Control/Elements/SyncButton",
  component: SyncButton,
  argTypes: {
    changes: {
      control: "boolean",
      description:
        "Whether there are any changes to be applied when not real-time.",
    },
    realTime: {
      control: "boolean",
      description: "Whether the data model is being applied in real-time.",
    },
    applyChanges: {
      description: "Function that triggers changes to be applied.",
    },
    setRealTime: {
      description:
        "Function for setting whether the data model is being applied in real-time.",
    },
  },
  decorators: [themeDecorator()],
} as ComponentMeta<typeof SyncButton>;

const Template: ComponentStory<typeof SyncButton> = (args) => (
  <SyncButton {...args} />
);

export const RealTime = Template.bind({});
RealTime.args = {
  changes: false,
  realTime: true,
};

export const SomeChanges = Template.bind({});
SomeChanges.args = {
  changes: true,
  realTime: false,
};

export const NoChanges = Template.bind({});
NoChanges.args = {
  changes: false,
  realTime: false,
};
