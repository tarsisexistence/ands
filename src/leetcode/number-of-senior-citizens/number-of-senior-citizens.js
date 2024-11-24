/**
 * Leetcode #2678
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-senior-citizens
 */

/**
 * @param {string[]} details
 * @return {number}
 */
export const countSeniors = details => {
  return details.filter(detail => Number(detail.at(-4) + detail.at(-3)) > 60).length;
};
