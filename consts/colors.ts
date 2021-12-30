export const CLASS_COLORS = {
  ARTIFICER: "#836c3c",
  BARBARIAN: "#c5654b",
  BARD: "#a579a6",
  BLOOD_HUNTER: "#551010",
  CLERIC: "#797b7c",
  DRUID: "#7e884a",
  FIGHTER: "#54352a",
  MONK: "#7fbfda",
  PALADIN: "#b6a05e",
  RANGER: "#3f6d50",
  ROGUE: "#44453e",
  SORCERER: "#bb4b50",
  WARLOCK: "#7447a7",
  WIZARD: "#3363b8",
};

export const CONTROL_COLORS = {
  BLACK: "#000",
  BLUE: "#2962FF",
  GREEN: "#00C853",
  GREY_DARK: "#333",
  GREY: "#666",
  GREY_LIGHT: "#999",
  GREY_LIGHTEST: "#DDD",
  ORANGE: "#FF6D00",
  RED: "#D50000",
  WHITE: "#fff",
  YELLOW: "#FFD600",
};

export type TControlColor = typeof CONTROL_COLORS[keyof typeof CONTROL_COLORS];
