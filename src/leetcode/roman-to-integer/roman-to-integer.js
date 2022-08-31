/**
 * Leetcode #13
 * Difficulty: Easy
 * https://leetcode.com/problems/roman-to-integer/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const romanToInt = s => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let sum = 0;

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    const value = map[c];
    const prev = s[i - 1];

    if (s[i - 1] === 'I') {
      sum += c === 'V' || c === 'X' ? value - 2 : value;
    } else if (s[i - 1] === 'X') {
      sum += c === 'L' || c === 'C' ? value - 20 : value;
    } else if (s[i - 1] === 'C') {
      sum += c === 'D' || c === 'M' ? value - 200 : value;
    } else {
      sum += value;
    }
  }

  return sum;
};
