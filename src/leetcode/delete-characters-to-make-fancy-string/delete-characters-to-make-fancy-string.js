/**
 * Leetcode #1957
 * Difficulty: Easy
 * https://leetcode.com/problems/delete-characters-to-make-fancy-string/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const makeFancyString = s => {
  let res = '';

  for (const c of s) {
    if (c !== res.at(-1) || c !== res.at(-2)) {
      res += c;
    }
  }

  return res;
};
