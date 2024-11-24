/**
 * Leetcode #3318
 * Difficulty: Easy
 * https://leetcode.com/problems/check-balanced-string
 */

/**
 * @param {string} num
 * @return {boolean}
 */
export var isBalanced = function(num) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < num.length; i += 1) {
      const value = Number(num[i]);

      if (i % 2 === 0) {
          even += value;
      } else {
          odd += value;
      }
  }

  return even === odd;
};