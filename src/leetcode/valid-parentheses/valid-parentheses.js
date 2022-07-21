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
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];

    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else if (stack.pop() !== map[c]) {
      return false;
    }
  }

  return stack.length === 0;
};
