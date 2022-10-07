/**
 * Leetcode #796
 * Difficulty: Easy
 * https://leetcode.com/problems/rotate-string
 */
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
export const rotateString = (s, goal) => {
  if (s === goal) {
    return true;
  }

  for (let i = 0; i < s.length; i += 1) {
    s = s.slice(1) + s[0];

    if (s === goal) {
      return true;
    }
  }

  return false;
};
