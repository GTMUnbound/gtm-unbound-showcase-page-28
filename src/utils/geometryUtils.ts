
export function getPos(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

export const visualSize = 420;
export const center = visualSize / 2;
export const moduleRadius = 140;
export const centerTileSize = 120;
export const moduleCardW = 110;
export const moduleCardH = 68;
