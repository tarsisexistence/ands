/**
 * Leetcode #733
 * Difficulty: Easy
 * https://leetcode.com/problems/flood-fill/
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
export const floodFill = (image, sr, sc, color) => {
  const visited = new Set();
  const baseColor = image[sr][sc];

  visit(sr, sc);

  return image;

  function visit(r, c) {
    if (visited.has(`${r}-${c}`) || image[r] === undefined || image[r][c] === undefined) {
      return;
    }

    visited.add(`${r}-${c}`);

    if (image[r][c] !== baseColor) {
      return;
    }

    image[r][c] = color;
    visit(r - 1, c);
    visit(r + 1, c);
    visit(r, c - 1);
    visit(r, c + 1);
  }
};

// export const floodFill = (image, r, c, color, baseColor = image[r][c], visited = new Set()) => {
//   if (visited.has(`${r}-${c}`) || image[r] === undefined || image[r][c] === undefined) {
//     return image;
//   }
//
//   visited.add(`${r}-${c}`);
//
//   if (image[r][c] !== baseColor) {
//     return image;
//   }
//
//   image[r][c] = color;
//   floodFill(image, r - 1, c, color, baseColor, visited);
//   floodFill(image, r + 1, c, color, baseColor, visited);
//   floodFill(image, r, c - 1, color, baseColor, visited);
//   floodFill(image, r, c + 1, color, baseColor, visited);
//
//   return image;
// };

// export const floodFill = (image, sr, sc, newColor) => {
//   const filledMap = new Map();
//   const targetColor = image[sr][sc];
//   flood(sr, sc);
//   return image;
//
//   function flood(r, c) {
//     const tag = `${r}.${c}`;
//
//     if (image[r] === undefined || image[r][c] !== targetColor || filledMap.has(tag)) {
//       return;
//     }
//
//     filledMap.set(tag, true);
//     image[r][c] = newColor;
//
//     flood(r - 1, c);
//     flood(r + 1, c);
//     flood(r, c - 1);
//     flood(r, c + 1);
//   }
// };
