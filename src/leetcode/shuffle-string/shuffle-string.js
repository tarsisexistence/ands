/**
 * Leetcode #1528
 * Difficulty: Easy
 * https://leetcode.com/problems/shuffle-string/
 */
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
export const restoreString = (s, indices) => {
  const shuffled = new Array(s.length);

  for (let i = 0; i < s.length; i += 1) {
    const newIndex = indices[i];
    shuffled[newIndex] = s[i];
  }

  return shuffled.join('');
};
