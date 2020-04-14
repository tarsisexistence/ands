/**
 * Leetcode #1374
 * Difficulty: Easy
 * https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 */
/**
 * @param {number} n
 * @return {string}
 */
export const generateTheString = n => {
  let str = '';

  for (let i = 0; i < n - 1; i += 1) {
    str += 'a';
  }

  return n % 2 === 0 ? str + 'b' : str + 'a';
};

// const generateTheString = n => {
//   const chars = 'a'.repeat(n - 1);
//   return n % 2 === 0 ? chars.concat('b') : chars.concat('a');
// };
