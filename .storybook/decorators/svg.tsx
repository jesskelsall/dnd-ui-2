import { DecoratorFn } from "@storybook/react";

export const svgDecorator =
  (size: number = 500): DecoratorFn =>
  (storyFn) =>
    (
      <svg width={size} height={size}>
        {storyFn()}
      </svg>
    );
