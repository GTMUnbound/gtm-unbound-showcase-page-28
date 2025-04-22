
export function getPos(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

// Increased visualSize for more space
export const visualSize = 460;
export const center = visualSize / 2;
// Increased module radius for better spacing
export const moduleRadius = 165;
// Slightly larger center tile
export const centerTileSize = 130;
// Slightly larger module cards
export const moduleCardW = 118;
export const moduleCardH = 72;
