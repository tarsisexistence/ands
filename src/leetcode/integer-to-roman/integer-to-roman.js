/**
 * Leetcode #12
 * Difficulty: Medium
 * https://leetcode.com/problems/integer-to-roman
 */
/**
 * @param {number} num
 * @return {string}
 */
export const intToRoman = num => {
  // from big to small
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let res = '';

  for (const str in map) {
    const value = map[str];
    res += str.repeat(Math.floor(num / value));
    num %= value;
  }

  return res;
};
