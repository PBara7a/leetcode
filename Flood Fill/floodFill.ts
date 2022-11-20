function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const targetColor: number = image[sr][sc];
  const queue: number[][] = [[sr, sc]];

  while (queue.length > 0) {
    const coordsNextPixel: number[] = queue.shift()!;
    const [row, col] = coordsNextPixel;
    image[row][col] = color;

    if (row > 0) {
      // above
      if (isPixelToPaint(image[row - 1][col], targetColor, color)) {
        queue.push([row - 1, col]);
      }
    }

    if (col !== 0) {
      // left
      if (isPixelToPaint(image[row][col - 1], targetColor, color)) {
        queue.push([row, col - 1]);
      }
    }

    if (col !== image[row].length - 1) {
      // right
      if (isPixelToPaint(image[row][col + 1], targetColor, color)) {
        queue.push([row, col + 1]);
      }
    }

    if (row < image.length - 1) {
      // below
      if (isPixelToPaint(image[row + 1][col], targetColor, color)) {
        queue.push([row + 1, col]);
      }
    }
  }

  return image;
}

function isPixelToPaint(
  currentColor: number,
  targetColor: number,
  newColor: number
) {
  return currentColor === targetColor && currentColor !== newColor;
}
