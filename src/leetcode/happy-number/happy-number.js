/**
 * Leetcode #202
 * Difficulty: Easy
 * https://leetcode.com/problems/happy-number/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
export const isHappy = n => {
  const map = new Map();
  let current = n;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    current = String(current)
      .split('')
      .reduce((sum, value) => sum + Number(value) ** 2, 0);

    if (current === 1) {
      return true;
    } else if (map.has(current)) {
      return false;
    } else {
      map.set(current, true);
    }
  }
};
