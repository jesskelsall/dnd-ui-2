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
