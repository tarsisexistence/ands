/**
 * Leetcode #2703
 * Difficulty: Easy
 * https://leetcode.com/problems/return-length-of-arguments-passed
 */

/**
 * @param {...*} args
 * @return {number}
 */
export const argumentsLength = (...args) => {
  return args.length;
};
