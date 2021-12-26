export interface IMapView {
  imageUrl: string; // URL to the map image
  scale: number; // Scale to display the map at, percentage.
  positionHorizontal: number; // Horizontal position to pan the map to, percentage.
  positionVertical: number; // Vertical position to pan the map to, percentage.
}
