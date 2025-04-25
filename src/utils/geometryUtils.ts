
// Geometry utilities for orbit - adjusted for perfect centering
export const visualSize = 528; // container size
export const center = visualSize / 2;
export const moduleRadius = 192; // orbit radius
export const centerTileSize = 146; // central card size
export const moduleCardW = 128;
export const moduleCardH = 78;

// Utility to get x/y for a given angle/radius
export function getOrbitPosition(angle: number, radius: number) {
  const rad = (angle - 90) * Math.PI / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

