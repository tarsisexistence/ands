/**
 * Leetcode #961
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 */
/**
 * @param {number[]} A
 * @return {number}
 */
export const repeatedNTimes = A => {
  const cache = new Map();

  for (let value of A) {
    if (cache.has(value)) {
      return value;
    }


    cache.add(value);
  }

  return -1;
};
