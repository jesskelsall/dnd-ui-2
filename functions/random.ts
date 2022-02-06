import _ from "lodash";
import { customAlphabet } from "nanoid";

const RANDOM_CHARACTERS = "1234567890abcdef";
const RANDOM_LENGTH = 16;

const RANDOM_HEX = customAlphabet(RANDOM_CHARACTERS, RANDOM_LENGTH);

// Generate a new random ID hash that hasn't already been used in this context
export const randomId = (existingIds: string[] | Record<string, unknown>) => {
  const ids = _.isArray(existingIds) ? existingIds : Object.keys(existingIds);
  let newId: string;

  do newId = RANDOM_HEX();
  while (ids.includes(newId));

  return newId;
};
