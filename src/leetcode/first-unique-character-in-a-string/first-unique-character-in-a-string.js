/**
 * Leetcode #387
 * Difficulty: Easy
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const firstUniqChar = s => {
  const map = new Map();

  for (let i = 0; i < s.length; i += 1) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i += 1) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};

// export const firstUniqChar = s => {
//   const map = new Map();
//
//   for (let i = 0; i < s.length; i += 1) {
//     if (map.has(s[i])) {
//       map.set(s[i], 2);
//     } else {
//       map.set(s[i], 1);
//     }
//   }
//
//   for (let i = 0; i < s.length; i += 1) {
//     if (map.get(s[i]) === 1) {
//       return i;
//     }
//   }
//
//   return -1;
// };
