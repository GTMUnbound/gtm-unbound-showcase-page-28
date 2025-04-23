
export function getPos(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

// Optimized measurements for better visual balance
export const visualSize = 580; // Slightly increased for better proportions
export const center = visualSize / 2;
export const moduleRadius = 210; // Increased for better spacing
export const centerTileSize = 146; // Keep center dominant but balanced
export const moduleCardW = 132; // Slightly wider cards
export const moduleCardH = 82; // Slightly taller for better text display

