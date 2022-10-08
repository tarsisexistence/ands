/**
 * Leetcode #504
 * Difficulty: Easy
 * https://leetcode.com/problems/base-7
 */
/**
 * @param {number} num
 * @return {string}
 */
export const convertToBase7 = num =>
  num < 0 ? `-${convertToBase7(-num)}` : num < 7 ? String(num) : `${convertToBase7(Math.floor(num / 7))}${num % 7}`;

// const convertToBase7 = num => num.toString(7);
