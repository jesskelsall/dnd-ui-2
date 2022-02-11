import _ from "lodash/fp";
import { PORT } from "../consts";

export type TCharacterImage = "hero-cards" | "portraits" | "tokens";

export const characterImage = _.curry(
  (type: TCharacterImage, id: string) =>
    `https://raw.githubusercontent.com/jesskelsall/astarus-images/main/characters/${type}/${id}.png`
);

export const localImage = (fileName: string) =>
  `http://localhost:${PORT}/${fileName}`;
