/**
 * Leetcode #1925
 * Difficulty: Easy
 * https://leetcode.com/problems/count-square-sum-triples/
 */
/**
 * @param {number} n
 * @return {number}
 */
export const countTriples = n => {
  let count = 0;

  for (let i = 1; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const value = i ** 2 + j ** 2;
      const sqrt = Math.sqrt(value);
      const isCeil = Math.floor(sqrt) === sqrt;

      if (isCeil && sqrt <= n) {
        count += 2;
      }
    }
  }

  return count;
};
