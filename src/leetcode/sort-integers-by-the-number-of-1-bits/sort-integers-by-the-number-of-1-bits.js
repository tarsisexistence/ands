/**
 * Leetcode #1356
 * Difficulty: Easy
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
export const sortByBits = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i; j < arr.length; j += 1) {
      const bits1 = bitCount(arr[i]);
      const bits2 = bitCount(arr[j]);
      const comparison = bits1 !== bits2 ? bits1 > bits2 : arr[i] > arr[j];

      if (comparison) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;

  function bitCount(num) {
    let bits = 0;
    while (num) {
      bits += num & 1;
      num = num >> 1;
    }
    return bits;
  }
};
