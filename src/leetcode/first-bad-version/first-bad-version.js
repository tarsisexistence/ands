/**
 * Leetcode #278
 * Difficulty: Easy
 * https://leetcode.com/problems/first-bad-version/
 */
/**
 * Definition for isBadVersion()
 *
 * @param {number} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
export const solution = isBadVersion => n => {
  let left = 0;
  let right = n;

  while (right - left !== 1) {
    const mid = Math.floor((left + right) / 2);
    const isBad = isBadVersion(mid);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
};
