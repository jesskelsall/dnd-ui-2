import { DecoratorFn } from "@storybook/react";

export const backgroundDecorator =
  (size: number = 500): DecoratorFn =>
  (storyFn) =>
    <div style={{ width: size, height: size }}>{storyFn()}</div>;
