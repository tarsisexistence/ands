/**
 * Leetcode #409
 * Difficulty: Easy
 * https://leetcode.com/problems/longest-palindrome
 */
/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = s => {
  const set = new Set();
  let res = 0;

  for (const c of s) {
    if (set.has(c)) {
      res += 2;
      set.delete(c);
    } else {
      set.add(c);
    }
  }

  return set.size === 0 ? res : res + 1;
};

// const longestPalindrome = s => {
//   const map = new Map();
//   let res = 0;
//
//   for (const c of s) {
//     map.set(c, (map.get(c) ?? 0) + 1);
//
//     if (map.get(c) % 2 === 0) {
//       res += 2;
//     }
//   }
//
//   return s.length > res ? res + 1 : res;
// };
