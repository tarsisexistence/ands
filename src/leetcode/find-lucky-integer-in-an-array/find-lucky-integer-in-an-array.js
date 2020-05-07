/**
 * Leetcode #1394
 * Difficulty: Easy
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
export const findLucky = arr => {
  const luckyNumsMap = new Map();
  let largestLuckyNumber = -1;

  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i];
    luckyNumsMap.set(num, (luckyNumsMap.get(num) || 0) + 1);
  }

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const num = arr[i];

    if (num === luckyNumsMap.get(num)) {
      largestLuckyNumber = Math.max(largestLuckyNumber, num);
    }
  }

  return largestLuckyNumber;
};
