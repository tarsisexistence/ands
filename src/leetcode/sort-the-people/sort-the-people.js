/**
 * Leetcode #2418
 * Difficulty: Easy
 * https://leetcode.com/problems/sort-the-people/
 */
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
export const sortPeople = (names, heights) => {
  const map = new Map();

  for (let i = 0; i < heights.length; i += 1) {
    map.set(heights[i], names[i]);
  }

  return heights.sort((a, b) => b - a).map(a => map.get(a));
};
