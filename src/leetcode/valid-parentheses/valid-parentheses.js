/**
 * Leetcode #20
 * Difficulty: Easy
 * https://leetcode.com/problems/valid-parentheses/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = s => {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];

    if (map[c]) {
      stack.push(c);
    } else if (map[stack.pop()] !== c) {
      return false;
    }
  }

  return stack.length === 0;
};
