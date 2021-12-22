/* eslint-disable react/jsx-filename-extension,@next/next/no-img-element */

// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// Mock Image as it doesn't play nicely with Jest
jest.mock(
  "next/image",
  () =>
    function Image({ alt, src }) {
      return <img alt={alt} src={src} />;
    }
);
