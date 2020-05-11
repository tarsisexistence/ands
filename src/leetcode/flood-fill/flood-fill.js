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
export const floodFill = (image, sr, sc, newColor) => {
  const filledMap = new Map();
  const targetColor = image[sr][sc];
  flood(sr, sc);
  return image;

  function flood(r, c) {
    const tag = `${r}.${c}`;

    if (
      image[r] === undefined ||
      image[r][c] !== targetColor ||
      filledMap.has(tag)
    ) {
      return;
    }

    filledMap.set(tag, true);
    image[r][c] = newColor;

    flood(r - 1, c);
    flood(r + 1, c);
    flood(r, c - 1);
    flood(r, c + 1);
  }
};
