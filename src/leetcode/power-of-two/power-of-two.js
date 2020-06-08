/**
 * Leetcode #231
 * Difficulty: Easy
 * https://leetcode.com/problems/power-of-two/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  const value = Math.log2(n);
  return value === Math.ceil(value);
};

// export const isPowerOfTwo = (n) => n > 0 && (n & (n - 1)) === 0;
