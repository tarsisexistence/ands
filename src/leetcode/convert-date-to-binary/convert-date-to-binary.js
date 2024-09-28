/**
 * Leetcode #3280
 * Difficulty: Easy
 * https://leetcode.com/problems/convert-date-to-binary
 */
/**
 * @param {string} date
 * @return {string}
 */
export const convertDateToBinary = function (date) {
  return date
    .split('-')
    .map(part => Number(part).toString(2))
    .join('-');
};
