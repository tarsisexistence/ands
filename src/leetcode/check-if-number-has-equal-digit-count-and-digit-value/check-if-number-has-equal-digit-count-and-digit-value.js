/**
 * Leetcode #2283
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
 */
/**
 * @param {string} num
 * @return {boolean}
 */
export const digitCount = num => {
  const map = new Map();

  for (let i = 0; i < num.length; i += 1) {
    map.set(num[i], (map.get(num[i]) ?? 0) + 1);
  }

  for (let i = 0; i < num.length; i += 1) {
    const count = map.get(String(i)) ?? 0;

    if (count !== Number(num[i])) {
      return false;
    }
  }

  return true;
};
