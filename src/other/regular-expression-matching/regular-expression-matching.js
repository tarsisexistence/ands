/**
 * Leetcode #10
 * https://leetcode.com/problems/regular-expression-matching/
 */
/**
 * @param {string} string
 * @param {string} pattern
 * @return {boolean}
 */
const isMatch = (string, pattern) => {
  if (!pattern) {
    return !string;
  }

  const hasFirstCharMatch = Boolean(string) && (pattern[0] === '.' || pattern[0] === string[0]);

  if (pattern[1] === '*') {
    return (
        isMatch(string, pattern.slice(2)) ||
        (hasFirstCharMatch && isMatch(string.slice(1), pattern))
    );
  }

  return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};
