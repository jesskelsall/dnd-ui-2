import _ from "lodash/fp";

export const zeroPad = (length: number, number: number): string =>
  _.flow(_.padStart(length), _.replace(" ", "0"))(`${number}`);
