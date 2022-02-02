import _ from "lodash/fp";

export type TCharacterImage = "hero-cards" | "portraits" | "tokens";

export const characterImage = _.curry(
  (type: TCharacterImage, id: string) =>
    `https://raw.githubusercontent.com/jesskelsall/astarus-images/main/characters/${type}/${id}.png`
);
