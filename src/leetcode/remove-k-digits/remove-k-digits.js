/**
 * Leetcode #402
 * Difficulty: Medium
 * https://leetcode.com/problems/remove-k-digits/
 */
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
export const removeKdigits = (num, k) => {
  const stack = [];
  let removed = 0;

  for (const n of num) {
    while (stack.length && Number(n) < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed += 1;
    }

    if (stack.length !== 0 || n !== '0') {
      stack.push(n);
    }
  }

  while (removed < k) {
    stack.pop();
    removed += 1;
  }

  return stack.length ? stack.join('') : '0';
};
